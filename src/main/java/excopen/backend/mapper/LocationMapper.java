package excopen.backend.mapper;


import excopen.backend.dto.LocationResponseDTO;
import excopen.backend.entities.Location;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LocationMapper {
    LocationResponseDTO toResponseDTO(Location location);
}
