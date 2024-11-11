package T_Bank.Back.Entities;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name = "review_images")
public class ReviewImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    private String imageUrl;
}