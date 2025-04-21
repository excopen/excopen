package excopen.backend.mapper;

import excopen.backend.dto.TourCreateDTO;
import excopen.backend.dto.TourResponseDTO;
import excopen.backend.dto.TourUpdateDTO;
import excopen.backend.entities.Description;
import excopen.backend.entities.Tour;
import excopen.backend.entities.Location;
import excopen.backend.entities.TourImage;
import excopen.backend.iservices.IDescriptionService;
import org.mapstruct.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {DescriptionMapper.class})
public interface TourMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "creator", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "rating", ignore = true)
    @Mapping(target = "reviewCount", ignore = true)
    @Mapping(target = "description", ignore = true)
    @Mapping(target = "location", source = "location")
    Tour toEntity(TourCreateDTO dto, Location location);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "creator", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "rating", ignore = true)
    @Mapping(target = "description", ignore = true)
    @Mapping(target = "location", source = "location")
    Tour toEntity(TourUpdateDTO dto, Location location);

    @Mapping(target = "creator", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "rating", ignore = true)
    @Mapping(target = "location", ignore = true)
    @Mapping(target = "description", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDTO(TourUpdateDTO dto, @MappingTarget Tour entity);

    @Mapping(target = "locationId", source = "location.id")
    @Mapping(target = "description", source = "description")
    @Mapping(source = "images", target = "imageUrls")
    TourResponseDTO toResponseDTO(Tour tour);

//    default List<String> mapImages(List<TourImage> images) {
//        if (images == null) return Collections.emptyList();
//        return images.stream()
//                .map(TourImage::getImageUrl)
//                .collect(Collectors.toList());
//    }

    default List<TourResponseDTO> toResponseDTOList(List<Tour> tours) {
        if (tours == null) return Collections.emptyList();
        return tours.stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    default List<String> mapTourImages(List<TourImage> images) {
        if (images == null) return List.of();
        return images.stream()
                .map(TourImage::getImageUrl)
                .toList();
    }
}
