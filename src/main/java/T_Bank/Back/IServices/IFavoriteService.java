package T_Bank.Back.IServices;

import T_Bank.Back.Entities.Tour;

import java.util.List;

public interface IFavoriteService {
    void addTourToFavorites(Long userId, Long tourId);
    void removeTourFromFavorites(Long userId, Long tourId);
    List<Tour> getFavoriteToursByUser(Long userId);
}
