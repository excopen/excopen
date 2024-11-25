package excopen.backend.iservices;

import excopen.backend.entities.Coordinate;

import java.util.List;
import java.util.Optional;



public interface ICoordinateService {
    Coordinate createCoordinate(Coordinate coordinate);
    Optional<Coordinate> getCoordinateById(Long coordinateId);
    Coordinate updateCoordinate(Coordinate coordinate);
    void deleteCoordinate(Long coordinateId);
    List<Coordinate> findCoordinatesByLocation(Long locationId);
}



