package excopen.backend.servicesImpl;

import excopen.backend.entities.Review;
import excopen.backend.iservices.IReviewService;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import excopen.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ReviewServiceImpl implements IReviewService {

    private final ReviewRepository reviewRepository;
    private final TourServiceImpl tourService;

    @Autowired
    public ReviewServiceImpl(ReviewRepository reviewRepository, TourServiceImpl tourService) {
        this.reviewRepository = reviewRepository;
        this.tourService = tourService;
    }

    @Override
    @Transactional
    public Review createReview(Review review) {
        Review savedReview = reviewRepository.save(review);
        tourService.updateTourStats(review.getTourId());
        return savedReview;
    }

    @Override
    public Review getReviewById(Long reviewId) {
        return reviewRepository.findById(reviewId)
                .orElseThrow(() -> new IllegalArgumentException("Review not found"));
    }

    @Override
    @Transactional
    public Review updateReview(Review review) {
        Review existingReview = getReviewById(review.getId());

        Review updatedReview = reviewRepository.save(review);
        if (!Objects.equals(existingReview.getRating(), review.getRating())) {
            tourService.updateTourStats(review.getTourId());
        }
        return updatedReview;
    }

    @Override
    @Transactional
    public void deleteReview(Long reviewId) {
        Review review = getReviewById(reviewId);
        Long tourId = review.getTourId();
        reviewRepository.delete(review);
        tourService.updateTourStats(tourId);
    }

    @Override
    public List<Review> getReviewsByTour(Long tourId) {
        return reviewRepository.findByTourId(tourId);
    }

    @Override
    public List<Review> getReviewsByUser(Long userId) {
        return reviewRepository.findByUserId(userId);
    }

//    @Override
//    public double getAverageRatingForTour(Long tourId) {
//        List<Review> reviews = reviewRepository.findByTourId(tourId);
//        if (reviews.isEmpty()) {
//            return 0.0;
//        }
//        double totalRating = reviews.stream().mapToDouble(Review::getRating).sum();
//        return totalRating / reviews.size();
//    }




}

