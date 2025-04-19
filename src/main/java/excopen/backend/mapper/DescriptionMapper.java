package excopen.backend.mapper;

import excopen.backend.dto.DescriptionDTO;
import excopen.backend.dto.DescriptionResponseDTO;
import excopen.backend.entities.Description;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface DescriptionMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "tour", ignore = true)
    Description toEntity(DescriptionDTO dto);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "tour", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDTO(DescriptionDTO dto, @MappingTarget Description entity);

    @Mapping(target = "tourId", source = "tour.id")
    DescriptionResponseDTO toResponseDTO(Description description);
}
