package excopen.backend.events;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class ReviewCreatedEvent extends ApplicationEvent {
    private final Long creatorId;

    public ReviewCreatedEvent(Object source, Long creatorId) {
        super(source);
        this.creatorId = creatorId;
    }

}
