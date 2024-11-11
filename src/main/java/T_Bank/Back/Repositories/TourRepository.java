package T_Bank.Back.Repositories;

import T_Bank.Back.Entities.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TourRepository extends JpaRepository<Tour, Long> {

    // Поиск экскурсий по ID местоположения
    List<Tour> findByLocationId(Long locationId);

    // Поиск экскурсий по продолжительности
    List<Tour> findByDuration(String duration);

}
