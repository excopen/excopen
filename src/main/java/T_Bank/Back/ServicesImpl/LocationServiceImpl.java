package T_Bank.Back.ServicesImpl;

import T_Bank.Back.Entities.Location;
import T_Bank.Back.IServices.ILocationService;
import T_Bank.Back.Repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationServiceImpl implements ILocationService {

    private final LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public Location createLocation(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public Optional<Location> getLocationById(Long locationId) {
        return locationRepository.findById(locationId);
    }

    @Override
    public Location updateLocation(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public void deleteLocation(Long locationId) {
        locationRepository.deleteById(locationId);
    }

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    @Override
    public List<Location> findLocationsByCity(String city) {
        return locationRepository.findByCity(city);
    }

    @Override
    public List<Location> findLocationsByRegion(String region) {
        return locationRepository.findByRegion(region);
    }
}
