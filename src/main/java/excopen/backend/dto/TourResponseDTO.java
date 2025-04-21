package excopen.backend.dto;

import excopen.backend.constants.TourType;
import excopen.backend.constants.TransportType;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class TourResponseDTO {
    private Long id;
    private String title;
    private Long locationId;
    private Integer price;
    private Double duration;
    private Double routeLength;
    private Integer minAge;
    private Integer maxCapacity;
    private Double rating;
    private Integer reviewCount;
    private List<String> imageUrls;
    private Long creatorId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private TourType tourType;
    private TransportType transportType;
    private DescriptionResponseDTO description;
}
