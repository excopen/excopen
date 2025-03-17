package excopen.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "reviews")
public class Review implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "tour_id")
    private Long tourId;


    @JoinColumn(name = "user_id")
    private Long userId;

    @Digits(integer = 2, fraction = 1)
    private BigDecimal rating;

    private String reviewText;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

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
