package excopen.backend.repositories;

import excopen.backend.entities.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TourRepository extends JpaRepository<Tour, Long> {

    // Поиск экскурсий по ID местоположения
    List<Tour> findByLocationId(Long locationId);

    // Поиск экскурсий по продолжительности
    List<Tour> findByDuration(String duration);

}
