package excopen.backend.repositories;

import excopen.backend.entities.Tour;
import excopen.backend.entities.TourImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TourImageRepository extends JpaRepository<TourImage, Long> {
    List<TourImage> findByTour(Tour tour);
    boolean existsByTour(Tour tour);
}
