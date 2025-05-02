package excopen.backend.servicesImpl;

import excopen.backend.repositories.TagRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TagVectorService {
    private final List<String> allTags; // загружается из БД, размер == 32

    public TagVectorService(TagRepository repo) {
        this.allTags = repo.findAllNamesOrdered();
        if (allTags.size() != 32) {
            throw new IllegalStateException("Нужны ровно 32 тега, а нашлось " + allTags.size());
        }
    }

    public int[] toVector(List<String> tags) {
        int[] vec = new int[allTags.size()];
        if (tags != null) {
            for (String tag : tags) {
                int i = allTags.indexOf(tag);
                if (i >= 0) vec[i] = 1;
                else throw new IllegalArgumentException("Неизвестный тег: " + tag);
            }
        }
        return vec;
    }

    public List<String> toNames(int[] vector) {
        if (vector.length != allTags.size()) {
            throw new IllegalArgumentException("Неправильная длина вектора");
        }
        List<String> out = new ArrayList<>();
        for (int i = 0; i < vector.length; i++) {
            if (vector[i] != 0) out.add(allTags.get(i));
        }
        return out;
    }
}
