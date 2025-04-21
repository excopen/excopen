package excopen.backend.config;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class TagCountHolder {

    public static int TAG_COUNT;

    private final AppProperties appProperties;

    public TagCountHolder(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    @PostConstruct
    public void init() {
        TAG_COUNT = appProperties.getTagCount();
    }
}
