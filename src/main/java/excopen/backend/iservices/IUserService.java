package excopen.backend.iservices;

import excopen.backend.dto.GuideRequestDto;
import excopen.backend.entities.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    User createUser(User user);
    User getUserById(Long userId);
    User getUserByGoogleId(String googleId);
    List<User> getAllUsers();
    User updateUser(User user);
    void deleteUser(Long userId);
    User updatePreferencesVector(Long userId, int[] preferencesVector);
    int[] getUserPreferenceVector(Long userId);
    void requestGuideRole(Long userId, GuideRequestDto guideRequestDto);
    boolean confirmGuideRole(Long userId, String phoneNumber, String code);
    boolean isGuide(Long userId);
    void updateGuideRating(Long userId);
}
