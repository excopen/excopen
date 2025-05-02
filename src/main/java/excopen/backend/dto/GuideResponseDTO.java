package excopen.backend.dto;

import excopen.backend.constants.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class GuideResponseDTO {

    private String name;
    private String surname;
    private LocalDateTime createdAt;
    private String description;
    private String city;
    private Double guideRating = 0.0;
    private Integer totalReviews = 0;
    private ContactsDTO contacts;

    @Data
    public static class ContactsDTO {
        private String vk;
        private String telegram;
        private String phone;
    }
}
