package excopen.backend.repositories;

import excopen.backend.entities.Description;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DescriptionRepository extends JpaRepository<Description, Long> {
    Optional<Description> findByTourId(Long tourId);
}

