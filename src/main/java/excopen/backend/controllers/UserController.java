package excopen.backend.controllers;

import excopen.backend.dto.*;
import excopen.backend.entities.User;
import excopen.backend.iservices.IUserService;
import excopen.backend.mapper.UserMapper;
import excopen.backend.security.CurrentUser;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
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
                                               @RequestParam String phoneNumber,
                                               @RequestParam String code) {
        boolean confirmed = userService.confirmGuideRole(user.getId(), phoneNumber, code);
        return confirmed
                ? ResponseEntity.ok("Поздравляем, теперь вы гид!")
                : ResponseEntity.badRequest().body("Неверный код подтверждения");
    }

    @GetMapping("/test")
    public String testRoute() {
        return "Контроллер работает!";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{userId}")
    public UserResponseDTO getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return userMapper.toResponseDTO(user);
    }

    @GetMapping("/guide/{userId}")
    public ResponseEntity<GuideResponseDTO> getGuideInfo(@PathVariable Long userId) {
        if (!userService.isGuide(userId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Гид с таким ID не найден");
        }
        return ResponseEntity.ok(userMapper.toGuideResponse(userService.getUserById(userId)));
    }

    @GetMapping("/me")
    public UserResponseDTO getCurrentUser(@CurrentUser User user) {
        return userMapper.toResponseDTO(user);
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
        return userMapper.toResponseDTO(userService.updateUser(user));
    }

    @PutMapping("/me/preferences-vector")
    public UserResponseDTO updatePreferencesVector(@RequestBody int[] preferencesVector,
                                                   @CurrentUser User user) {
        return userMapper.toResponseDTO(userService.updatePreferencesVector(user.getId(), preferencesVector));
    }

    @DeleteMapping("/me")
    public ResponseEntity<Void> deleteUser(@CurrentUser User user) {
        userService.deleteUser(user.getId());
        return ResponseEntity.noContent().build();
    }
}
