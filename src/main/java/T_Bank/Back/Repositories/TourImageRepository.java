package T_Bank.Back.Repositories;

import T_Bank.Back.Entities.TourImage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface TourImageRepository extends JpaRepository<TourImage, Long> {
    List<TourImage> findByTourId(Long tourId);
    boolean existsByTourId(Long tourId);
}