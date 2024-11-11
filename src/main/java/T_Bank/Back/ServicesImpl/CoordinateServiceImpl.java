package T_Bank.Back.ServicesImpl;

import T_Bank.Back.Entities.Coordinate;
import T_Bank.Back.IServices.ICoordinateService;

import java.util.List;
import java.util.Optional;

public class CoordinateServiceImpl implements ICoordinateService {
    @Override
    public Coordinate createCoordinate(Coordinate coordinate) {
        return null;
    }

    @Override
    public Optional<Coordinate> getCoordinateById(Long coordinateId) {
        return Optional.empty();
    }

    @Override
    public Coordinate updateCoordinate(Coordinate coordinate) {
        return null;
    }

    @Override
    public void deleteCoordinate(Long coordinateId) {}
    @Override
    public List<Coordinate> findCoordinatesByLocation(Long locationId) {
        return List.of();
    }
}








