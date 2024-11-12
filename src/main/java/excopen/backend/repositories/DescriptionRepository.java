package excopen.backend.repositories;

import excopen.backend.entities.Description;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DescriptionRepository extends JpaRepository<Description, Long> {
}

