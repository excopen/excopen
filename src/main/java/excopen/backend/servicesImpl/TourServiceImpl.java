package excopen.backend.servicesImpl;

import excopen.backend.entities.Description;
import excopen.backend.entities.Tour;
import excopen.backend.entities.User;
import excopen.backend.iservices.ITourService;
import excopen.backend.iservices.IUserService;
import excopen.backend.repositories.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class TourServiceImpl implements ITourService {

    private final TourRepository tourRepository;

    private final UserServiceImpl userService;

    @Autowired
    public TourServiceImpl(TourRepository tourRepository, DescriptionServiceImpl descriptionService, UserServiceImpl userService) {
        this.tourRepository = tourRepository;
        this.userService = userService;
    }

    @Override
    public Tour createTour(Tour tour, String googleId) {
        if (tour == null) {
            throw new IllegalArgumentException("Tour object cannot be null");
        }
        if (tour.getTitle() == null) {
            throw new IllegalArgumentException("Title field cannot be null");
        }
        if (tour.getLocationId() == null) {
            throw new IllegalArgumentException("LocationId field cannot be null");
        }
        if (tour.getPrice() == null) {
            throw new IllegalArgumentException("Price field cannot be null");
        }
        if (tour.getDuration() == null) {
            throw new IllegalArgumentException("Duration field cannot be null");
        }
        if (tour.getRouteLength() == null) {
            throw new IllegalArgumentException("RouteLength field cannot be null");
        }
        if (tour.getMinAge() == null) {
            throw new IllegalArgumentException("MinAge field cannot be null");
        }
        if (tour.getMaxCapacity() == null) {
            throw new IllegalArgumentException("MaxCapacity field cannot be null");
        }
        if (tour.getVectorRepresentation() == null) {
            throw new IllegalArgumentException("VectorRepresentation field cannot be null");
        }

        User creator = userService.findByGoogleId(googleId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        tour.setCreatorId(creator.getId());
        return tourRepository.save(tour);
    }


    @Override
    public Tour getTourById(Long tourId) {
        return tourRepository.findById(tourId)
                .orElseThrow(() -> new IllegalArgumentException("Tour not found"));
    }


    @Override
    public Tour updateTour(Long tourId, Tour updatedTour, Description updatedDesc) {
        Tour existingTour = getTourById(tourId);

        if (updatedTour.getTitle() != null) {
            existingTour.setTitle(updatedTour.getTitle());
        }
        if (updatedTour.getLocationId() != null) {
            existingTour.setLocationId(updatedTour.getLocationId());
        }
        if (updatedTour.getPrice() != null) {
            existingTour.setPrice(updatedTour.getPrice());
        }
        if (updatedTour.getDuration() != null) {
            existingTour.setDuration(updatedTour.getDuration());
        }
        if (updatedTour.getRouteLength() != null) {
            existingTour.setRouteLength(updatedTour.getRouteLength());
        }
        if (updatedTour.getMinAge() != null) {
            existingTour.setMinAge(updatedTour.getMinAge());
        }
        if (updatedTour.getMaxCapacity() != null) {
            existingTour.setMaxCapacity(updatedTour.getMaxCapacity());
        }
        if (updatedTour.getRating() != null) {
            existingTour.setRating(updatedTour.getRating());
        }



        return tourRepository.save(existingTour);
    }



    @Override
    public void deleteTour(Long tourId) {
        Tour existingTour = getTourById(tourId);
        tourRepository.delete(existingTour);
    }

    @Override
    public List<Tour> getAllTours() {
        return tourRepository.findAll();
    }

    @Override
    public List<Tour> findToursByLocation(Long locationId) {
        return tourRepository.findByLocationId(locationId);
    }

    @Override
    public List<Tour> findToursByDuration(String duration) {
        return tourRepository.findByDuration(duration);
    }
}
