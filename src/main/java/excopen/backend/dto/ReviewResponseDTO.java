package excopen.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ReviewResponseDTO {
    private Long id;
    private Long tourId;
    private Long userId;
    private Double rating;
    private boolean withChildren;
    private double personCount;
    private String positiveText;
    private String negativeText;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
