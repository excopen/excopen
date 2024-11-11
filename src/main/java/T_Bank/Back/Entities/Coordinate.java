package T_Bank.Back.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.Type;


import java.awt.*;


@Data
@Entity
@Table(name = "coordinates")
public class Coordinate {

    @Id
    @Column(name = "coordinates_id")
    private Long Id;

    private Point coordinates;
}
