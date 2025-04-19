package excopen.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class GuideRequestDto {

    @NotBlank(message = "Номер телефона обязателен")
    @Pattern(regexp = "^\\+7\\d{10}$", message = "Номер должен быть в формате +7XXXXXXXXXX")
    private String phoneNumber;

    @NotBlank(message = "Описание не должно быть пустым")
    private String description;

    @NotBlank(message = "Город обязателен")
    private String city;

    private String vkLink;
    private String telegramLink;
}

