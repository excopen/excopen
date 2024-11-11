package T_Bank.Back.Repositories;

import T_Bank.Back.Entities.Favorite;
import T_Bank.Back.Entities.Tour;
import T_Bank.Back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    boolean existsByUserAndTour(User user, Tour tour); // Проверка на наличие записи

    Optional<Favorite> findByUserIdAndTourId(Long userId, Long tourId); // Поиск по ID пользователя и тура

    List<Long> findTourIdsByUserId(Long userId); // Получаем все tour_id по user_id
}


