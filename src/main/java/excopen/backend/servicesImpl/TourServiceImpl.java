package excopen.backend.servicesImpl;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import excopen.backend.dto.FilterToursDTO;
import excopen.backend.entities.QTour;
import excopen.backend.entities.Tour;
import excopen.backend.entities.User;
import excopen.backend.iservices.ITourService;
import excopen.backend.repositories.TourRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Validated
public class TourServiceImpl implements ITourService {

    private final TourRepository tourRepository;
    private final UserServiceImpl userService;

    private final UserServiceImpl userService;
    private final DescriptionServiceImpl descriptionService;

    @Autowired
    public TourServiceImpl(TourRepository tourRepository,
                           UserServiceImpl userService) {
        this.tourRepository = tourRepository;
        this.userService = userService;
    }

    @Transactional
    public Tour createTour(Tour tour, Long creatorId) {
        Tour savedTour = tourRepository.save(tour);
        savedTour.setCreatorId(creatorId);
        return savedTour;

    }


    @Override
    public Tour getTourById(Long tourId) {
        return tourRepository.findById(tourId)
                .orElseThrow(() -> new IllegalArgumentException("Tour not found"));
    }


    @Override
    public Tour updateTour(Tour tour) {
        return tourRepository.save(tour);
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
    public List<Tour> findToursByDuration(BigDecimal duration) {
        return tourRepository.findByDuration(duration);
    }

    @Override
    public List<Tour> getRecommendedTours(Long userId) {
        int[] preferencesVectorArray = userService.getUserPreferenceVector(userId);
        String preferencesVector = convertArrayToVectorString(preferencesVectorArray);
        return tourRepository.findRecommendedTours(preferencesVector);
    }

    @Override
    public List<Tour> getSimilarTours(Long tourId) {
        Tour baseTour = this.getTourById(tourId);
        String vectorString = convertArrayToVectorString(baseTour.getVectorRepresentation());
        return tourRepository.findSimilarTours(tourId, vectorString);
    }

    public Page<Tour> filterTours(FilterToursDTO filter, Pageable pageable) {
        QTour tour = QTour.tour;
        BooleanBuilder predicate = new BooleanBuilder();

        if (filter.getTitle() != null) {
            predicate.and(tour.title.containsIgnoreCase(filter.getTitle()));
        }
        if (filter.getLocationId() != null) {
            predicate.and(tour.locationId.eq(filter.getLocationId()));
        }
        if (filter.getPriceFrom() != null) {
            predicate.and(tour.price.goe(filter.getPriceFrom()));
        }
        if (filter.getPriceTo() != null) {
            predicate.and(tour.price.loe(filter.getPriceTo()));
        }
        if (filter.getDurationFrom() != null) {
            predicate.and(tour.duration.goe(filter.getDurationFrom()));
        }
        if (filter.getDurationTo() != null) {
            predicate.and(tour.duration.loe(filter.getDurationTo()));
        }
        if (filter.getRouteLengthFrom() != null) {
            predicate.and(tour.routeLength.goe(filter.getRouteLengthFrom()));
        }
        if (filter.getRouteLengthTo() != null) {
            predicate.and(tour.routeLength.loe(filter.getRouteLengthTo()));
        }
        if (filter.getRatingFrom() != null) {
            predicate.and(tour.rating.goe(filter.getRatingFrom()));
        }
        if (filter.getRatingTo() != null) {
            predicate.and(tour.rating.loe(filter.getRatingTo()));
        }
        if (filter.getTourType() != null) {
            predicate.and(tour.tourType.eq(filter.getTourType()));
        }
        if (filter.getTransportType() != null) {
            predicate.and(tour.transportType.eq(filter.getTransportType()));
        }
        if (filter.getMinAge() != null) {
            predicate.and(tour.minAge.loe(filter.getMinAge()));
        }
        if (filter.getCapacity() != null) {
            predicate.and(tour.maxCapacity.goe(filter.getCapacity()));
        }

        return tourRepository.findAll(predicate, pageable);
    }

    private String convertArrayToVectorString(int[] array) {
        return "[" + Arrays.stream(array)
                .mapToObj(String::valueOf)
                .collect(Collectors.joining(", ")) + "]";
    }
}
