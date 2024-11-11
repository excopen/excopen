package T_Bank.Back.IServices;

import T_Bank.Back.Entities.Location;

import java.util.List;
import java.util.Optional;

public interface ILocationService {
    Location createLocation(Location location);
    Optional<Location> getLocationById(Long locationId);
    Location updateLocation(Location location);
    void deleteLocation(Long locationId);
    List<Location> getAllLocations();
    List<Location> findLocationsByCity(String city);
    List<Location> findLocationsByRegion(String region);
}
