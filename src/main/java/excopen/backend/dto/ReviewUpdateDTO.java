package excopen.backend.dto;

import lombok.Data;
import jakarta.validation.constraints.*;

@Data
public class ReviewUpdateDTO {

    @NotNull(message = "Rating is required")
    @DecimalMin(value = "1.0", message = "Rating must be at least 1.0")
    @DecimalMax(value = "5.0", message = "Rating must be at most 5.0")
    private Double rating;

    @NotBlank(message = "Review text cannot be empty")
    @Size(max = 2000, message = "Review text must be less than 2000 characters")
    private String reviewText;
}
