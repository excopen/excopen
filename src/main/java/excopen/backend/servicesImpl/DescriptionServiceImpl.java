package excopen.backend.servicesImpl;

import excopen.backend.entities.Description;
import excopen.backend.iservices.IDescriptionService;
import excopen.backend.repositories.DescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DescriptionServiceImpl implements IDescriptionService {

    private final DescriptionRepository descriptionRepository;
    private final UserServiceImpl userService;
    @Autowired
    public DescriptionServiceImpl(DescriptionRepository descriptionRepository, UserServiceImpl userService) {
        this.descriptionRepository = descriptionRepository;
        this.userService = userService;
    }

    @Override
    public Description createDescription(Description description) {
        if (description == null) {
            throw new IllegalArgumentException("Description object cannot be null");
        }
        if (description.getMainInfo() == null) {
            throw new IllegalArgumentException("MainInfo field cannot be null");
        }
        if (description.getWhatToExpect() == null) {
            throw new IllegalArgumentException("WhatToExpect field cannot be null");
        }
        if (description.getMeetingPlace() == null) {
            throw new IllegalArgumentException("MeetingPlace field cannot be null");
        }
        if (description.getOrgDetails() == null) {
            throw new IllegalArgumentException("OrgDetails field cannot be null");
        }

        return descriptionRepository.save(description);
    }


    @Override
    public Optional<Description> getDescriptionById(Long descriptionId) {
        return descriptionRepository.findById(descriptionId);
    }

    @Override
    public Description getDescriptionByTourId(Long tourId) {
        return descriptionRepository.findByTourId(tourId)
                .orElseThrow(() -> new IllegalArgumentException("Description not found"));
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
