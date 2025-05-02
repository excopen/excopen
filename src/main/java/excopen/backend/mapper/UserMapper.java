package excopen.backend.mapper;

import excopen.backend.dto.GuideResponseDTO;
import excopen.backend.dto.UserCreateDTO;
import excopen.backend.dto.UserResponseDTO;
import excopen.backend.dto.UserUpdateDTO;
import excopen.backend.entities.User;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "preferencesVector", ignore = true)
    @Mapping(target = "secondVector", ignore = true)
    User toEntity(UserCreateDTO dto);

    @Mapping(source = "preferencesVector", target = "tags")
    @Mapping(target = "contacts", source = ".")
    UserResponseDTO toUserResponseDTO(User user);

    GuideResponseDTO toGuideResponseDTO(User user);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "googleId", ignore = true)
    @Mapping(target = "email", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "secondVector", ignore = true)
    @Mapping(target = "preferencesVector", source = "tags")
    @Mapping(target = "vkLink", source = "contacts.vk")
    @Mapping(target = "telegramLink", source = "contacts.telegram")
    @Mapping(target = "phoneNumber", source = "contacts.phone")
    void updateFromDTO(UserUpdateDTO dto, @MappingTarget User user);

    @Mapping(target = "contacts", source = ".")
    GuideResponseDTO toGuideResponse(User user);

    default UserResponseDTO.ContactsDTO mapContacts(User user) {
        UserResponseDTO.ContactsDTO contacts = new UserResponseDTO.ContactsDTO();
        contacts.setVk(user.getVkLink());
        contacts.setTelegram(user.getTelegramLink());
        contacts.setPhone(user.getPhoneNumber());
        return contacts;
    }

}
