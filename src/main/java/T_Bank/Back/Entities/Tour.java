package T_Bank.Back.Entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Array;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.pgvector.PGvector;



@Data
@Entity
@Table(name = "tours")
public class Tour implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "description_id")
    private Description descriptionId;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    private BigDecimal price;
    private String duration;
    private BigDecimal routeLength;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Column(name = "vector_representation")
    @JdbcTypeCode(SqlTypes.VECTOR)
    @Array(length = 3)
    private float[] vectorRepresentation;// Или List<Float> в зависимости от вашего подхода

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User creator;

    private Integer minAge;
    private Integer maxCapacity;

    @Column(precision = 2, scale = 1)
    private BigDecimal rating;
}
