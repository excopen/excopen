package T_Bank.Back.IServices;

import T_Bank.Back.Entities.TourImage;

import java.util.List;
import java.util.Optional;

public interface ITourImageService {
    TourImage addTourImage(Long tourId, String imageUrl);
    void deleteTourImage(Long tourImageId);
    List<TourImage> getImagesByTour(Long tourId);
    Optional<TourImage> getImageById(Long tourImageId);
}
