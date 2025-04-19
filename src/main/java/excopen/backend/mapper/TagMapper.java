package excopen.backend.mapper;

import excopen.backend.dto.TagResponseDTO;
import excopen.backend.dto.TourResponseDTO;
import excopen.backend.entities.Tag;
import excopen.backend.entities.Tour;
import org.mapstruct.Mapper;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
    TagResponseDTO toResponseDTO(Tag tag);

    default List<TagResponseDTO> toResponseDTOList(List<Tag> tags) {
        if (tags == null) return Collections.emptyList();
        return tags.stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }
}
