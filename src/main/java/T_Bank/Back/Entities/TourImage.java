package T_Bank.Back.Entities;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "tour_images")
public class TourImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "tour_id")
    private Tour tour;

    private String imageUrl;
}
