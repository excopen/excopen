package excopen.backend.repositories;

import excopen.backend.entities.Text;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DescriptionRepository extends JpaRepository<Text, Long> {
}

