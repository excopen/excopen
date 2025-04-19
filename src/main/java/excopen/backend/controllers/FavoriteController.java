package excopen.backend.controllers;

import excopen.backend.dto.TourResponseDTO;
import excopen.backend.entities.Tour;
import excopen.backend.entities.User;
import excopen.backend.iservices.IDescriptionService;
import excopen.backend.iservices.IFavoriteService;
import excopen.backend.mapper.TourMapper;
import excopen.backend.security.CurrentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final IFavoriteService favoriteService;
    private final IDescriptionService descriptionService;
    private final TourMapper tourMapper;

    @Autowired
    public FavoriteController(IFavoriteService favoriteService,
                              IDescriptionService descriptionService,
                              TourMapper tourMapper) {
        this.favoriteService = favoriteService;
        this.descriptionService = descriptionService;
        this.tourMapper = tourMapper;
    }

    @PostMapping("/{tourId}")
    public void addTourToFavorites(@PathVariable Long tourId, @CurrentUser User user) {
        favoriteService.addTourToFavorites(user.getId(), tourId);
    }

    @DeleteMapping("/{tourId}")
    public void removeTourFromFavorites(@PathVariable Long tourId, @CurrentUser User user) {
        favoriteService.removeTourFromFavorites(user.getId(), tourId);
    }

    @GetMapping
    public List<TourResponseDTO> getFavoriteToursByUser(@CurrentUser User user) {
        List<Tour> tours = favoriteService.getFavoriteToursByUser(user.getId());
        return tourMapper.toResponseDTOList(tours);
    }
}
