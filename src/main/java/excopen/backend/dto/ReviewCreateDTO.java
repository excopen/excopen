package excopen.backend.dto;

import lombok.Data;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;

@Data
public class ReviewCreateDTO {
    @NotNull(message = "Tour ID is required")
    private Long tourId;

    @NotNull(message = "Rating is required")
    @Digits(integer = 2, fraction = 1, message = "Rating must have up to one decimal place")
    @DecimalMin(value = "1.0", message = "Rating must be at least 1.0")
    @DecimalMax(value = "5.0", message = "Rating must be at most 5.0")
    private BigDecimal rating;

    @NotBlank(message = "Review text cannot be empty")
    @Size(max = 2000, message = "Review text must be less than 2000 characters")
    private String reviewText;
}
