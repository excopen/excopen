package excopen.backend.controllers;

import excopen.backend.entities.Review;
import excopen.backend.iservices.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final IReviewService reviewService;

    @Autowired
    public ReviewController(IReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    @GetMapping("/{reviewId}")
    public Review getReviewById(@PathVariable Long reviewId) {
        return reviewService.getReviewById(reviewId).orElseThrow(() -> new IllegalArgumentException("Review not found"));
    }

    @PutMapping("/{reviewId}")
    public Review updateReview(@PathVariable Long reviewId, @RequestBody Review review) {
        review.setId(reviewId);
        return reviewService.updateReview(review);
    }

    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
    }

    @GetMapping("/tour/{tourId}")
    public List<Review> getReviewsByTour(@PathVariable Long tourId) {
        return reviewService.getReviewsByTour(tourId);
    }

    @GetMapping("/user/{userId}")
    public List<Review> getReviewsByUser(@PathVariable Long userId) {
        return reviewService.getReviewsByUser(userId);
    }

    @GetMapping("/tour/{tourId}/average-rating")
    public double getAverageRatingForTour(@PathVariable Long tourId) {
        return reviewService.getAverageRatingForTour(tourId);
    }
}
