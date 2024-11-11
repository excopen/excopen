package T_Bank.Back.ServicesImpl;

import T_Bank.Back.Entities.Description;
import T_Bank.Back.IServices.IDescriptionService;
import T_Bank.Back.Repositories.DescriptionRepository;
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
    public Description createDescription(Description description) {
        return descriptionRepository.save(description);
    }

    @Override
    public Optional<Description> getDescriptionById(Long descriptionId) {
        return descriptionRepository.findById(descriptionId);
    }

    @Override
    public Description updateDescription(Description description) {
        return descriptionRepository.save(description);
    }

    @Override
    public void deleteDescription(Long descriptionId) {
        descriptionRepository.deleteById(descriptionId);
    }
}
