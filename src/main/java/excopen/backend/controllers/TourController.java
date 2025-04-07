package excopen.backend.controllers;


import excopen.backend.dto.TourCreateDTO;
import excopen.backend.dto.TourResponseDTO;
import excopen.backend.dto.TourUpdateDTO;
import excopen.backend.entities.Description;
import excopen.backend.entities.Tour;
import excopen.backend.entities.User;
import excopen.backend.iservices.IDescriptionService;
import excopen.backend.iservices.ITourService;
import excopen.backend.iservices.IUserService;
import excopen.backend.mapper.DescriptionMapper;
import excopen.backend.mapper.TourMapper;
import excopen.backend.security.RequiresOwnership;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final ITourService tourService;
    private final IDescriptionService descriptionService;
    private final IUserService userService;
    private final TourMapper tourMapper;
    private final DescriptionMapper descriptionMapper;



    @Autowired
    public TourController(ITourService tourService, IDescriptionService descriptionService, IUserService userService, TourMapper tourMapper, DescriptionMapper descriptionMapper) {
        this.tourService = tourService;
        this.descriptionService = descriptionService;
        this.userService = userService;
        this.tourMapper = tourMapper;
        this.descriptionMapper = descriptionMapper;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TourResponseDTO createTour(
            @Valid @RequestBody TourCreateDTO request,
            @AuthenticationPrincipal OAuth2User principal
    ) {
        if (principal == null) {
            throw new IllegalStateException("Пользователь не аутентифицирован");
        }
        String googleId = principal.getAttribute("sub");
        User creator = userService.getUserByGoogleId(googleId);

        Tour newTour = tourMapper.toEntity(request);
        tourService.createTour(newTour, creator.getId());

        Description description = descriptionMapper.toEntity(request.getDescription());
        descriptionService.createDescription(description, newTour.getId());

        return tourMapper.toResponseDTO(newTour, description);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<TourResponseDTO>> searchTours(
            @ModelAttribute FilterToursDTO filter,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortOrder) {

        Sort.Direction direction = sortOrder.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));

        Page<Tour> tours = tourService.filterTours(filter, pageable);

        Page<TourResponseDTO> response = tours.map(tour -> {
            Description description = descriptionService.getDescriptionByTourId(tour.getId());
            return tourMapper.toResponseDTO(tour, description);
        });

        return ResponseEntity.ok(response);
    }



    @RequiresOwnership(entityClass = Tour.class)
    @PutMapping("/{tourId}")
    public TourResponseDTO updateTour(
            @PathVariable Long tourId,
            @Valid @RequestBody TourUpdateDTO updateDTO,
            @AuthenticationPrincipal OAuth2User principal
    ) {
        Tour newTour = tourMapper.toEntity(updateDTO);
        newTour.setId(tourId);

        Tour updatedTour = tourService.updateTour(newTour);

        Description description = descriptionMapper.toEntity(updateDTO.getDescription());
        Description updatedDescription = descriptionService.updateDescription(description);

        return tourMapper.toResponseDTO(updatedTour, updatedDescription);
    }


    @RequiresOwnership(entityClass = Tour.class)
    @DeleteMapping("/{tourId}")
    public void deleteTour(@PathVariable Long tourId,
                           @AuthenticationPrincipal OAuth2User principal) {
        tourService.deleteTour(tourId);
    }

    @GetMapping("/{tourId}")
    public TourResponseDTO getTourById(@PathVariable Long tourId) {
        Tour tour = tourService.getTourById(tourId);
        Description description = descriptionService.getDescriptionByTourId(tourId);
        return tourMapper.toResponseDTO(tour, description);
    }

    @GetMapping
    public List<TourResponseDTO> getAllTours() {
        List<Tour> tours = tourService.getAllTours();
        return tourMapper.toResponseDTOList(tours, descriptionService);
    }

    @GetMapping("/location/{locationId}")
    public List<TourResponseDTO> findToursByLocation(@PathVariable Long locationId) {
        List<Tour> tours = tourService.findToursByLocation(locationId);
        return tourMapper.toResponseDTOList(tours, descriptionService);
    }

    @GetMapping("/duration/{duration}")
    public List<TourResponseDTO> findToursByDuration(@PathVariable BigDecimal duration) {
        List<Tour> tours = tourService.findToursByDuration(duration);
        return tourMapper.toResponseDTOList(tours, descriptionService);
    }

    @GetMapping("/recommendations/{userId}")
    public List<TourResponseDTO> getRecommendedTours(@PathVariable Long userId) {
        List<Tour> recommendedTours = tourService.getRecommendedTours(userId);
        return tourMapper.toResponseDTOList(recommendedTours, descriptionService);
    }

    @GetMapping("/{tourId}/similar")
    public List<TourResponseDTO> getSimilarTours(@PathVariable Long tourId) {
        List<Tour> similarTours = tourService.getSimilarTours(tourId);
        return tourMapper.toResponseDTOList(similarTours, descriptionService);
    }
}
