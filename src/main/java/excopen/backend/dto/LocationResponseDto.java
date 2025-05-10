package excopen.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LocationResponseDto {
    private Long id;
    private String city;
    private String region;
    private String country;
    private String imageUrl;
    private Long tourCount;
}
