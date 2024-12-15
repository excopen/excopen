package excopen.backend.iservices;

import excopen.backend.entities.Text;
import java.util.Optional;


public interface IDescriptionService {
    Text createDescription(Text description);
    Optional<Text> getDescriptionById(Long descriptionId);
    Text updateDescription(Text description);
    void deleteDescription(Long descriptionId);
}
