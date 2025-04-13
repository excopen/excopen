package excopen.backend.iservices;

import excopen.backend.entities.Location;
import java.util.List;
import java.util.Optional;

public interface ILocationService {
    List<Location> getAllLocations();
    Location getLocationById(Long id);
}
