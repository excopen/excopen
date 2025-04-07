package excopen.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class GuideResponseDTO {

    private String name;
    private String surname;
    private LocalDateTime createdAt;
    private String description;
    private String city;
}
