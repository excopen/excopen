package T_Bank.Back.Repositories;


import T_Bank.Back.Entities.TourTags;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourTagRepository extends JpaRepository<TourTags, Long> {
}
