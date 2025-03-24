package excopen.backend.dto;

import excopen.backend.constants.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserResponseDTO {
    private String name;
    private String surname;
    private String email;
    private LocalDateTime createdAt;
    private int[] preferencesVector;
    @Enumerated(EnumType.STRING)
    private Role role;
}