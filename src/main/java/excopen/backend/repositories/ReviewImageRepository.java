package excopen.backend.repositories;

import excopen.backend.entities.ReviewImage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ReviewImageRepository extends JpaRepository<ReviewImage, Long> {
    List<ReviewImage> findByReviewId(Long reviewId);
    boolean existsByReviewId(Long reviewId);
}

