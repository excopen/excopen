package excopen.backend.util;

import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.Phonenumber.PhoneNumber;
import org.springframework.stereotype.Component;

@Component
public class PhoneNumberValidator {

    private static final PhoneNumberUtil phoneNumberUtil = PhoneNumberUtil.getInstance();
    private static final String REGION_CODE = "RU";

    public boolean isValidRussianPhoneNumber(String number) {
        try {
            PhoneNumber phoneNumber = phoneNumberUtil.parse(number, REGION_CODE);
            return phoneNumberUtil.isValidNumber(phoneNumber);
        } catch (NumberParseException e) {
            return false;
        }
    }

    public String normalizePhoneNumber(String number) {
        try {
            PhoneNumber phoneNumber = phoneNumberUtil.parse(number, REGION_CODE);
            return phoneNumberUtil.format(phoneNumber, PhoneNumberUtil.PhoneNumberFormat.E164);
        } catch (NumberParseException e) {
            throw new IllegalArgumentException("Некорректный номер телефона: " + number);
        }
    }

}
