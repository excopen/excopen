package excopen.backend.controllers;

import excopen.backend.dto.*;
import excopen.backend.entities.Description;
import excopen.backend.entities.Location;
import excopen.backend.entities.Tour;
import excopen.backend.entities.User;
import excopen.backend.iservices.ILocationService;
import excopen.backend.iservices.ITourImageService;
import excopen.backend.iservices.ITourService;
import excopen.backend.mapper.DescriptionMapper;
import excopen.backend.mapper.TourMapper;
import excopen.backend.security.RequiresOwnership;
import excopen.backend.security.CurrentUser;
import excopen.backend.servicesImpl.FileStorageService;
import excopen.backend.servicesImpl.TagVectorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final ITourService tourService;
    private final ILocationService locationService;
    private final TourMapper tourMapper;
    private final DescriptionMapper descriptionMapper;
    private final FileStorageService fileStorageService;
    private final ITourImageService tourImageService;
    private final TagVectorService tagVectorService;

    @Autowired
    public TourController(ITourService tourService,
                          ILocationService locationService,
                          TourMapper tourMapper,
                          DescriptionMapper descriptionMapper,
                          FileStorageService fileStorageService,
                          ITourImageService tourImageService,
                          TagVectorService tagVectorService) {
        this.tourService = tourService;
        this.locationService = locationService;
        this.tourMapper = tourMapper;
        this.descriptionMapper = descriptionMapper;
        this.fileStorageService = fileStorageService;
        this.tourImageService = tourImageService;
        this.tagVectorService = tagVectorService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasRole('GUIDE')")
    public TourResponseDTO createTour(
            @Valid @ModelAttribute TourCreateForm form,
            @CurrentUser User user) {

        TourCreateDTO dto = form.getTour();
        List<MultipartFile> images = form.getImages();

        Location location = locationService.getLocationById(dto.getLocationId());
        Tour tour = tourMapper.toEntity(dto, location, tagVectorService); // FIXED

        Description description = descriptionMapper.toEntity(dto.getDescription());
        tour.setDescription(description);

        Tour createdTour = tourService.createTour(tour, user.getId());

        for (MultipartFile image : images) {
            String imageUrl = fileStorageService.storeTourImage(image);
            tourImageService.addTourImage(createdTour.getId(), imageUrl);
        }

        return tourMapper.toResponseDTO(createdTour, tagVectorService);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<TourResponseDTO>> searchTours(
            @Valid @ModelAttribute FilterToursDTO filter,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortOrder) {

        Sort.Direction direction = sortOrder.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));

        Page<Tour> tours = tourService.filterTours(filter, pageable);
        return ResponseEntity.ok(tours.map(tour -> tourMapper.toResponseDTO(tour, tagVectorService)));
    }

    @RequiresOwnership(entityClass = Tour.class)
    @PutMapping("/{tourId}")
    public TourResponseDTO updateTour(@PathVariable Long tourId,
                                      @Valid @RequestBody TourUpdateDTO updateDTO) {

        Location location = updateDTO.getLocationId() != null
                ? locationService.getLocationById(updateDTO.getLocationId())
                : null;

        Tour tour = tourMapper.toEntity(updateDTO, location, tagVectorService); // FIXED
        tour.setId(tourId);

        if (updateDTO.getDescription() != null) {
            Description description = descriptionMapper.toEntity(updateDTO.getDescription());
            tour.setDescription(description);
        }

        Tour updatedTour = tourService.updateTour(tour);
        return tourMapper.toResponseDTO(updatedTour, tagVectorService);
    }

    @RequiresOwnership(entityClass = Tour.class)
    @DeleteMapping("/{tourId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTour(@PathVariable Long tourId) {
        tourService.deleteTour(tourId);
    }

    @GetMapping("/{tourId}")
    public TourResponseDTO getTourById(@PathVariable Long tourId) {
        Tour tour = tourService.getTourById(tourId);
        return tourMapper.toResponseDTO(tour, tagVectorService);
    }

    @GetMapping("/guide/{guideId}")
    public List<TourResponseDTO> getToursByGuideId(@PathVariable Long guideId) {
        return tourMapper.toResponseDTOList(tourService.getToursByCreatorId(guideId), tagVectorService);
    }

    @GetMapping
    public List<TourResponseDTO> getAllTours() {
        return tourMapper.toResponseDTOList(tourService.getAllTours(), tagVectorService);
    }

    @GetMapping("/location/{locationId}")
    public List<TourResponseDTO> findToursByLocation(@PathVariable Long locationId) {
        return tourMapper.toResponseDTOList(tourService.findToursByLocation(locationId), tagVectorService);
    }

    @GetMapping("/duration/{duration}")
    public List<TourResponseDTO> findToursByDuration(@PathVariable Double duration) {
        return tourMapper.toResponseDTOList(tourService.findToursByDuration(duration), tagVectorService);
    }

    @GetMapping("/recommendations/{userId}")
    public List<TourResponseDTO> getRecommendedTours(@PathVariable Long userId) {
        return tourMapper.toResponseDTOList(tourService.getRecommendedTours(userId), tagVectorService);
    }

    @GetMapping("/{tourId}/similar")
    public List<TourResponseDTO> getSimilarTours(@PathVariable Long tourId) {
        return tourMapper.toResponseDTOList(tourService.getSimilarTours(tourId), tagVectorService);
    }
}
