package T_Bank.Back.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "description")
public class Description {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


    private String mainInfo;

    private String whatToExpect;

    private String orgDetails;

    private String meetingPlace;
}
