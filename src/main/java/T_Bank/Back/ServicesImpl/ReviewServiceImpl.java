package T_Bank.Back.ServicesImpl;

import T_Bank.Back.Entities.Review;
import T_Bank.Back.IServices.IReviewService;

import java.util.List;
import java.util.Optional;

import T_Bank.Back.Repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ReviewServiceImpl implements IReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public Optional<Review> getReviewById(Long reviewId) {
        return reviewRepository.findById(reviewId);
    }

    @Override
    public Review updateReview(Review review) {
        if (reviewRepository.existsById(review.getId())) {
            return reviewRepository.save(review);
        } else {
            throw new IllegalArgumentException("Review with ID " + review.getId() + " does not exist.");
        }
    }

    @Override
    public void deleteReview(Long reviewId) {
        if (reviewRepository.existsById(reviewId)) {
            reviewRepository.deleteById(reviewId);
        } else {
            throw new IllegalArgumentException("Review with ID " + reviewId + " does not exist.");
        }
    }

    @Override
    public List<Review> getReviewsByTour(Long tourId) {
        return reviewRepository.findByTourId(tourId);
    }

    @Override
    public List<Review> getReviewsByUser(Long userId) {
        return reviewRepository.findByUserId(userId);
    }

    @Override
    public double getAverageRatingForTour(Long tourId) {
        List<Review> reviews = reviewRepository.findByTourId(tourId);
        if (reviews.isEmpty()) {
            return 0.0;
        }
        double totalRating = reviews.stream().mapToDouble(Review::getRating).sum();
        return totalRating / reviews.size();
    }
}

