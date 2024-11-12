package excopen.backend.repositories;

import excopen.backend.entities.Coordinate;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordinateRepository extends JpaRepository<Coordinate, Long> {
}

