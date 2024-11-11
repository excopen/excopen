package T_Bank.Back.Controllers;

import T_Bank.Back.Entities.Tour;
import T_Bank.Back.IServices.IFavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final IFavoriteService favoriteService;

    @Autowired
    public FavoriteController(IFavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PostMapping("/{userId}/{tourId}")
    public void addTourToFavorites(@PathVariable Long userId, @PathVariable Long tourId) {
        favoriteService.addTourToFavorites(userId, tourId);
    }

    @DeleteMapping("/{userId}/{tourId}")
    public void removeTourFromFavorites(@PathVariable Long userId, @PathVariable Long tourId) {
        favoriteService.removeTourFromFavorites(userId, tourId);
    }

    @GetMapping("/{userId}")
    public List<Tour> getFavoriteToursByUser(@PathVariable Long userId) {
        return favoriteService.getFavoriteToursByUser(userId);
    }
}


