package excopen.backend.repositories;

import excopen.backend.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {
    // Метод для поиска тегов, ближайших к заданному вектору
    @Query(value = "SELECT * FROM Tags ORDER BY vector_representation <-> :inputVector LIMIT :limit", nativeQuery = true)
    List<Tag> findByVectorRepresentation(@Param("inputVector") float[] inputVector, @Param("limit") int limit);
}
