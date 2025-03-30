package excopen.backend.util;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class VerificationService {
    // Фиксированный код для прототипа
    private static final String FIXED_CODE = "000000";
    // Лимит: 1 запрос в 3 минуты на номер
    private static final int RATE_LIMIT_MINUTES = 3;

    private final PhoneNumberValidator phoneNumberValidator;

    private final Cache<String, String> verificationCodes =
            Caffeine.newBuilder()
                    .expireAfterWrite(5, TimeUnit.MINUTES)
                    .build();

    private final Cache<String, Boolean> rateLimitCache =
            Caffeine.newBuilder()
                    .expireAfterWrite(RATE_LIMIT_MINUTES, TimeUnit.MINUTES)
                    .build();

    public void sendVerificationCode(String phoneNumber) {
        String normalizedPhone = phoneNumberValidator.normalizePhoneNumber(phoneNumber);

        if (!phoneNumberValidator.isValidRussianPhoneNumber(normalizedPhone)) {
            throw new IllegalArgumentException("Некорректный номер");
        }

        if (rateLimitCache.getIfPresent(normalizedPhone) != null) {
            throw new IllegalStateException("Повторный запрос через " + RATE_LIMIT_MINUTES + " минут");
        }

        verificationCodes.put(normalizedPhone, FIXED_CODE);
        rateLimitCache.put(normalizedPhone, true);
    }

    public boolean verifyCode(String phoneNumber, String code) {
        String normalizedPhone = phoneNumberValidator.normalizePhoneNumber(phoneNumber);
        String storedCode = verificationCodes.getIfPresent(normalizedPhone);

        if (storedCode == null) {
            return false;
        }

        boolean isValid = storedCode.equals(code);
        if (isValid) {
            verificationCodes.invalidate(normalizedPhone);
        }

        return isValid;
    }
}