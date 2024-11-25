package excopen.backend.servicesImpl;

import excopen.backend.entities.Favorite;
import excopen.backend.entities.Tour;
import excopen.backend.entities.User;
import excopen.backend.iservices.IFavoriteService;
import excopen.backend.repositories.FavoriteRepository;
import excopen.backend.repositories.TourRepository;
import excopen.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImpl implements IFavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final TourRepository tourRepository;
    private final UserRepository userRepository;

    @Autowired
    public FavoriteServiceImpl(FavoriteRepository favoriteRepository, TourRepository tourRepository, UserRepository userRepository) {
        this.favoriteRepository = favoriteRepository;
        this.tourRepository = tourRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void addTourToFavorites(Long userId, Long tourId) {
        // Проверяем, существует ли пользователь и тур
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Tour tour = tourRepository.findById(tourId).orElseThrow(() -> new IllegalArgumentException("Tour not found"));

        // Проверяем, нет ли уже этого тура в избранном
        if (favoriteRepository.existsByUserAndTour(user, tour)) {
            throw new IllegalArgumentException("This tour is already in the user's favorites.");
        }

        Favorite favorite = new Favorite();
        favorite.setUser(user); // Устанавливаем объект User
        favorite.setTour(tour); // Устанавливаем объект Tour
        favoriteRepository.save(favorite);
    }

    @Override
    public void removeTourFromFavorites(Long userId, Long tourId) {
        // Проверяем, существует ли запись в избранном
        Favorite favorite = favoriteRepository.findByUserIdAndTourId(userId, tourId)
                .orElseThrow(() -> new IllegalArgumentException("Favorite tour not found for this user."));

        favoriteRepository.delete(favorite);
    }

    @Override
    public List<Tour> getFavoriteToursByUser(Long userId) {
        // Получаем все ID туров из избранного пользователя
        List<Long> tourIds = favoriteRepository.findTourIdsByUserId(userId);
        return tourRepository.findAllById(tourIds); // Ищем все туры по этим ID
    }
}
