package excopen.backend.iservices;

import excopen.backend.entities.TourImage;

import java.util.List;
import java.util.Optional;

public interface ITourImageService {
    void saveImages(Long tourId, List<String> imageUrls);
    TourImage addTourImage(Long tourId, String imageUrl);
    void deleteTourImage(Long tourImageId);
    List<TourImage> getImagesByTour(Long tourId);
    Optional<TourImage> getImageById(Long tourImageId);
}
