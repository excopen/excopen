package excopen.backend.repositories;

import excopen.backend.entities.TourImage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface TourImageRepository extends JpaRepository<TourImage, Long> {
    List<TourImage> findByTourId(Long tourId);
    boolean existsByTourId(Long tourId);
}