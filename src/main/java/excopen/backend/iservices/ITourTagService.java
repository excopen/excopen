package excopen.backend.iservices;

import excopen.backend.entities.Tag;
import excopen.backend.entities.Tour;

import java.util.List;

public interface ITourTagService {
    void addTagToTour(Long tourId, Long tagId);
    void removeTagFromTour(Long tourId, Long tagId);
    List<Tag> getTagsByTour(Long tourId);
    List<Tour> getToursByTag(Long tagId);
}
