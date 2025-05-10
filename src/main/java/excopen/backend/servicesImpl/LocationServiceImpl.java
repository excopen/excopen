package excopen.backend.servicesImpl;

import excopen.backend.dto.LocationResponseDto;
import excopen.backend.entities.Location;
import excopen.backend.iservices.ILocationService;
import excopen.backend.repositories.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements ILocationService {

    private final LocationRepository locationRepository;

    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    @Override
    public Location getLocationById(Long id) {
        return locationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Location not found"));
    }

    @Override
    public List<LocationResponseDto> getAllLocationsWithTourCount() {
        return locationRepository.findAllWithTourCount();
    }
}
