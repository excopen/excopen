package T_Bank.Back.IServices;

import T_Bank.Back.Entities.Tag;
import T_Bank.Back.Entities.Tour;

import java.util.List;

public interface ITourTagService {
    void addTagToTour(Long tourId, Long tagId);
    void removeTagFromTour(Long tourId, Long tagId);
    List<Tag> getTagsByTour(Long tourId);
    List<Tour> getToursByTag(Long tagId);
}
