package T_Bank.Back.Repositories;

import T_Bank.Back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

