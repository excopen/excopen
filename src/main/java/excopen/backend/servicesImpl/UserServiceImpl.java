package excopen.backend.servicesImpl;

import excopen.backend.entities.User;
import excopen.backend.iservices.IUserService;
import excopen.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(Long userId, User user) {
        return userRepository.save(user);
    }

    // Обработка пользователя OAuth2
    public User processOAuthPostLogin(OAuth2User oAuth2User) {
        String googleId = oAuth2User.getAttribute("sub");
        Optional<User> userOptional = userRepository.findByGoogleId(googleId);

        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            User newUser = new User();
            newUser.setGoogleId(googleId);
            newUser.setEmail(oAuth2User.getAttribute("email"));
            newUser.setName(oAuth2User.getAttribute("given_name"));
            newUser.setSurname(oAuth2User.getAttribute("family_name"));
            return userRepository.save(newUser);
        }
    }
}
