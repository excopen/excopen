package excopen.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Array;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private String patronymic;
    private String email;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @JdbcTypeCode(SqlTypes.VECTOR)
    @Array(length = 3)
    private float[] preferencesVector;

    @JdbcTypeCode(SqlTypes.VECTOR)
    @Array(length = 3)
    private float[] secondVector;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

}

