package T_Bank.Back.Repositories;

import T_Bank.Back.Entities.ReviewImage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ReviewImageRepository extends JpaRepository<ReviewImage, Long> {
    List<ReviewImage> findByReviewId(Long reviewId);
    boolean existsByReviewId(Long reviewId);
}

