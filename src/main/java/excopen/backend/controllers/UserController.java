package excopen.backend.controllers;

import excopen.backend.constants.Role;
import excopen.backend.dto.GuideRequestDto;
import excopen.backend.dto.GuideResponseDTO;
import excopen.backend.dto.UserResponseDTO;
import excopen.backend.dto.UserUpdateDTO;
import excopen.backend.entities.User;
import excopen.backend.iservices.IUserService;
import excopen.backend.mapper.UserMapper;
import excopen.backend.security.RequiresUserAuthorization;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> applyForGuide(@AuthenticationPrincipal OAuth2User principal,
                                                @RequestBody @Valid GuideRequestDto guideRequestDto) {
        String googleId = principal.getAttribute("sub");
        User user = userService.getUserByGoogleId(googleId);
        userService.requestGuideRole(user.getId(), guideRequestDto);
        return ResponseEntity.ok("Код отправлен на номер " + guideRequestDto.getPhoneNumber());
    }


    @PostMapping("/confirm-guide")
    public ResponseEntity<String> confirmGuide(@AuthenticationPrincipal OAuth2User principal,
                                               @RequestParam String phoneNumber,
                                               @RequestParam String code) {
        String googleId = principal.getAttribute("sub");
        User user = userService.getUserByGoogleId(googleId);
        boolean confirmed = userService.confirmGuideRole(user.getId(), phoneNumber, code);
        if (confirmed) {
            return ResponseEntity.ok("Поздравляем, теперь вы гид!");
        }
        return ResponseEntity.badRequest().body("Неверный код подтверждения");
    }

    @GetMapping("/test")
    public String testRoute() {
        return "Контроллер работает!";
    }

    @GetMapping("/{userId}")
    @RequiresUserAuthorization
    public UserResponseDTO getUserById(
            @PathVariable Long userId,
            @AuthenticationPrincipal OAuth2User principal) {
        User user = userService.getUserById(userId);
        return userMapper.toResponseDTO(user);
    }

    @GetMapping("/guide/{userId}")
    public ResponseEntity<GuideResponseDTO> getGuideInfo(@PathVariable Long userId) {
        var user = userService.getUserById(userId);

        if (!userService.isGuide(userId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Гид с таким ID не найден");
        }

        return ResponseEntity.ok(userMapper.toGuideResponse(user));
    }




    @GetMapping("/me")
    public UserResponseDTO getCurrentUser(@AuthenticationPrincipal OAuth2User principal) {
        String googleId = principal.getAttribute("sub");
        User user = userService.getUserByGoogleId(googleId);
        return userMapper.toResponseDTO(user);
    }

    /// Только для разработки
    @GetMapping("/attributes")
    public Map<String, Object> userAttributes(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }

    @RequiresUserAuthorization
    @PutMapping("/{userId}")
    public UserResponseDTO updateUser(
            @PathVariable Long userId,
            @Valid @RequestBody UserUpdateDTO userUpdateDTO,
            @AuthenticationPrincipal OAuth2User principal) {
        User existingUser = userService.getUserById(userId);
        userMapper.updateFromDTO(userUpdateDTO, existingUser);
        User updatedUser = userService.updateUser(userId, existingUser);
        return userMapper.toResponseDTO(updatedUser);
    }

    @RequiresUserAuthorization
    @PutMapping("/{userId}/preferences-vector")
    public UserResponseDTO updatePreferencesVector(
            @PathVariable Long userId,
            @RequestBody int[] preferencesVector,
            @AuthenticationPrincipal OAuth2User principal) {
        User updatedUser = userService.updatePreferencesVector(userId, preferencesVector);
        return userMapper.toResponseDTO(updatedUser);
    }

    @RequiresUserAuthorization
    @DeleteMapping("/{userId}")
    public void deleteUser(
            @PathVariable Long userId,
            @AuthenticationPrincipal OAuth2User principal) {
        userService.deleteUser(userId);
    }
}
