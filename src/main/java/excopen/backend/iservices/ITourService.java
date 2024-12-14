package excopen.backend.iservices;

import excopen.backend.entities.Description;
import excopen.backend.entities.Tour;

import java.util.List;
import java.util.Optional;


public interface ITourService {
    Tour createTour(Tour tour, String googleId);
    Tour getTourById(Long tourId);
    Tour updateTour(Long tourId, Tour updatedTour, Description description);
    void deleteTour(Long tourId);
    List<Tour> getAllTours();
    List<Tour> findToursByLocation(Long locationId);
    List<Tour> findToursByDuration(String duration);
}

