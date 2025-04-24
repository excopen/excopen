package excopen.backend.listeners;

import excopen.backend.events.ReviewCreatedEvent;
import excopen.backend.iservices.IUserService;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class ReviewEventListener {

    private final IUserService userService;

    public ReviewEventListener(IUserService userService) {
        this.userService = userService;
    }

    @EventListener
    public void handleReviewCreated(ReviewCreatedEvent event) {
        Long creatorId = event.getCreatorId();
        userService.updateGuideRating(creatorId);
    }
}
