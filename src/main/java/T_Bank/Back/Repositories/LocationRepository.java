package T_Bank.Back.Repositories;

import T_Bank.Back.Entities.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    // Метод для поиска по городу
    List<Location> findByCity(String city);

    // Метод для поиска по региону
    List<Location> findByRegion(String region);
}
