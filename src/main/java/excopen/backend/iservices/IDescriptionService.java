package excopen.backend.iservices;

import excopen.backend.entities.Description;
import java.util.Optional;


public interface IDescriptionService {
    Description createDescription(Description description);
    Optional<Description> getDescriptionById(Long descriptionId);
    Description getDescriptionByTourId(Long tourId);
    Description updateDescription(Description description);
    void deleteDescription(Long descriptionId);
}
