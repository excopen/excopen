package excopen.backend.repositories;


import excopen.backend.entities.TourTags;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourTagRepository extends JpaRepository<TourTags, Long> {
}
