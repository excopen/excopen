package excopen.backend.controllers;

import excopen.backend.dto.TagResponseDTO;
import excopen.backend.iservices.ITagService;
import excopen.backend.mapper.TagMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tags")
public class TagController {

    private final ITagService tagService;
    private final TagMapper tagMapper;

    public TagController(ITagService tagService, TagMapper tagMapper) {
        this.tagService = tagService;
        this.tagMapper = tagMapper;
    }


//    @GetMapping
//    public List<TagResponseDTO> getAllTags() {
//        return tagMapper.toResponseDTOList(tagService.getAllTags());
//    }

    @GetMapping
    public List<String> getAllTags() {
        return tagService.getAllTags().stream()
                .map(tag -> tag.getName())
                .collect(Collectors.toList());
    }
}
