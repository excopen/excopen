package excopen.backend.controllers;

import excopen.backend.constants.Role;
import excopen.backend.dto.*;
import excopen.backend.entities.User;
import excopen.backend.iservices.IUserService;
import excopen.backend.mapper.UserMapper;
import excopen.backend.security.CurrentUser;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final IUserService userService;
    private final UserMapper userMapper;

    @Autowired
    public UserController(IUserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping("/apply-guide")
    public ResponseEntity<String> applyForGuide(@CurrentUser User user,
                                                @RequestBody @Valid GuideRequestDto guideRequestDto) {
        userService.requestGuideRole(user.getId(), guideRequestDto);
        return ResponseEntity.ok("Код отправлен на номер " + guideRequestDto.getPhoneNumber());
    }

    @PostMapping("/confirm-guide")
    public ResponseEntity<String> confirmGuide(@CurrentUser User user,
                                               @RequestBody ConfirmGuideDto dto) {
        boolean confirmed = userService.confirmGuideRole(user.getId(), dto.getPhoneNumber(), dto.getCode());
        return confirmed
                ? ResponseEntity.ok("Поздравляем, теперь вы гид!")
                : ResponseEntity.badRequest().body("Неверный код подтверждения");
    }


    @GetMapping("/test")
    public String testRoute() {
        return "Контроллер работает!";
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUser(@PathVariable Long id,
                                                   @CurrentUser(required = false) User currentUser) {
        User targetUser = userService.getUserById(id);

        boolean isSelf = currentUser != null && currentUser.getId().equals(targetUser.getId());
        boolean isAdmin = currentUser != null && currentUser.getRole().equals(Role.ADMIN);
        boolean isGuide = targetUser.getRole().equals(Role.GUIDE);

        if (!isGuide && !isAdmin && !isSelf) {
            throw new AccessDeniedException("Нет прав на просмотр профиля этого пользователя.");
        }
        if(targetUser.getRole().equals(Role.GUIDE))
        {
            return ResponseEntity.ok(userMapper.toGuideResponseDTO(targetUser));
        }else
      //  if(targetUser.getRole().equals(Role.USER))
        {
            return ResponseEntity.ok(userMapper.toUserResponseDTO(targetUser));
        }
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponseDTO> getCurrentUser(@CurrentUser User currentUser) {
            return ResponseEntity.ok(userMapper.toUserResponseDTO(currentUser));
    }

    @GetMapping("/test/me")
    public ResponseEntity<UserResponseDTO> getCurrentUser() {
        return ResponseEntity.ok(createMockUser());
    }

    private static UserResponseDTO createMockUser() {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setName("Иван");
        dto.setSurname("Иванов");
        dto.setEmail("ivan.ivanov@example.com");
        dto.setCreatedAt(LocalDateTime.of(2023, 1, 15, 14, 30));
        dto.setPreferencesVector(new int[]{1, 0, 1});
        dto.setRole(Role.USER);
        dto.setDescription("Пример описания пользователя");
        dto.setCity("Москва");
        dto.setGuideRating(4.7);
        dto.setTotalReviews(25);
        dto.setVkLink("https://example.com/");
        dto.setTelegramLink("https://example.com/");

        return dto;
    }

    /// Только для разработки
    @GetMapping("/attributes")
    public Map<String, Object> userAttributes(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }

    @PutMapping("/me")
    public UserResponseDTO updateUser(@Valid @RequestBody UserUpdateDTO userUpdateDTO,
                                      @CurrentUser User user) {
        userMapper.updateFromDTO(userUpdateDTO, user);
        return userMapper.toUserResponseDTO(userService.updateUser(user));
    }

    @PutMapping("/me/preferences-vector")
    public UserResponseDTO updatePreferencesVector(@RequestBody int[] preferencesVector,
                                                   @CurrentUser User user) {
        return userMapper.toUserResponseDTO(userService.updatePreferencesVector(user.getId(), preferencesVector));
    }

//    @DeleteMapping("/me")
//    public ResponseEntity<Void> deleteUser(@CurrentUser User user) {
//        userService.deleteUser(user.getId());
//        return ResponseEntity.noContent().build();
//    }
}
