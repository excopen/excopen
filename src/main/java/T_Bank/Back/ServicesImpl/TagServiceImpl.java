package T_Bank.Back.ServicesImpl;

import T_Bank.Back.Entities.Tag;
import T_Bank.Back.IServices.ITagService;
import T_Bank.Back.Repositories.TagRepository;
import T_Bank.Back.Utills.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Vector;

@Service
public class TagServiceImpl implements ITagService {

    private final TagRepository tagRepository;

    @Autowired
    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public Optional<Tag> getTagById(Long tagId) {
        return tagRepository.findById(tagId);
    }

    @Override
    public Tag updateTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public void deleteTag(Long tagId) {
        tagRepository.deleteById(tagId);
    }

    @Override
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Override
    public List<Tag> findTagsByVector(Vector vectorRepresentation) {
        float[] vectorArray = new float[vectorRepresentation.size()];
        for (int i = 0; i < vectorRepresentation.size(); i++) {
            vectorArray[i] = ((Number) vectorRepresentation.get(i)).floatValue();
        }
        return tagRepository.findByVectorRepresentation(vectorArray, Constants.limit);
    }
}
