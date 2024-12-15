package excopen.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "description")
public class Text {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String mainInfo;

    private String whatToExpect;

    private String orgDetails;

    private String meetingPlace;
}
