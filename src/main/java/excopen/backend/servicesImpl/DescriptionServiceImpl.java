package excopen.backend.servicesImpl;

import excopen.backend.entities.Text;
import excopen.backend.iservices.IDescriptionService;
import excopen.backend.repositories.DescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DescriptionServiceImpl implements IDescriptionService {

    private final DescriptionRepository descriptionRepository;

    @Autowired
    public DescriptionServiceImpl(DescriptionRepository descriptionRepository) {
        this.descriptionRepository = descriptionRepository;
    }

    @Override
    public Text createDescription(Text description) {
        return descriptionRepository.save(description);
    }

    @Override
    public Optional<Text> getDescriptionById(Long descriptionId) {
        return descriptionRepository.findById(descriptionId);
    }

    @Override
    public Text updateDescription(Text description) {
        return descriptionRepository.save(description);
    }

    @Override
    public void deleteDescription(Long descriptionId) {
        descriptionRepository.deleteById(descriptionId);
    }
}
