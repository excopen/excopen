package excopen.backend.controllers;

import excopen.backend.entities.Tour;
import excopen.backend.iservices.ITourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final ITourService tourService;

    @Autowired
    public TourController(ITourService tourService) {
        this.tourService = tourService;
    }

    @PostMapping
    public Tour createTour(@RequestBody Tour tour) {
        return tourService.createTour(tour);
    }

    @GetMapping("/{tourId}")
    public Tour getTourById(@PathVariable Long tourId) {
        return tourService.getTourById(tourId).orElseThrow(() -> new IllegalArgumentException("Tour not found"));
    }

    @PutMapping("/{tourId}")
    public Tour updateTour(@PathVariable Long tourId, @RequestBody Tour tour) {
        tour.setId(tourId);
        return tourService.updateTour(tour);
    }

    @DeleteMapping("/{tourId}")
    public void deleteTour(@PathVariable Long tourId) {
        tourService.deleteTour(tourId);
    }

    @GetMapping
    public List<Tour> getAllTours() {
        return tourService.getAllTours();
    }
}
