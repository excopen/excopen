package T_Bank.Back.Entities;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "tour_tags")
public class TourTags {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Assumes auto-increment primary key
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "tour_id", nullable = false)
    private Tour tour;

    @ManyToOne
    @JoinColumn(name = "tag_id", nullable = false)
    private Tag tag;
}
