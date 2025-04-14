package excopen.backend.dto;

import excopen.backend.constants.TourType;
import excopen.backend.constants.TransportType;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.DecimalMax;
import lombok.Data;

@Data
public class FilterToursDTO {
    private String title;
    private Long locationId;

    @Min(value = 0, message = "Цена не может быть отрицательной")
    private Integer priceFrom;
    @Min(value = 0, message = "Цена не может быть отрицательной")
    private Integer priceTo;

    @DecimalMin(value = "0.0", message = "Длительность не может быть отрицательной")
    private Double durationFrom;
    @DecimalMin(value = "0.0", message = "Длительность не может быть отрицательной")
    private Double durationTo;

    @DecimalMin(value = "0.0", message = "Протяжённость маршрута не может быть отрицательной")
    private Double routeLengthFrom;
    @DecimalMin(value = "0.0", message = "Протяжённость маршрута не может быть отрицательной")
    private Double routeLengthTo;

    @DecimalMin(value = "0.0", message = "Рейтинг не может быть отрицательным")
    private Double ratingFrom;
    @DecimalMin(value = "0.0", message = "Рейтинг не может быть отрицательным")
    private Double ratingTo;

    private TourType tourType;
    private TransportType transportType;

    @Min(value = 0, message = "Минимальный возраст не может быть отрицательным")
    private Integer minAge;
    @Min(value = 0, message = "Вместимость не может быть отрицательной")
    private Integer capacity;
}
