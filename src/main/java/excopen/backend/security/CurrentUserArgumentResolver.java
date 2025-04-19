package excopen.backend.security;

import excopen.backend.entities.User;
import excopen.backend.iservices.IUserService;
import org.springframework.core.MethodParameter;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.security.access.AccessDeniedException;

public class CurrentUserArgumentResolver implements HandlerMethodArgumentResolver {

    private final IUserService userService;

    public CurrentUserArgumentResolver(IUserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.hasParameterAnnotation(CurrentUser.class)
                && parameter.getParameterType().equals(User.class);
    }

    @Override
    public Object resolveArgument(MethodParameter parameter,
                                  ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest,
                                  WebDataBinderFactory binderFactory) {

        CurrentUser annotation = parameter.getParameterAnnotation(CurrentUser.class);
        boolean required = annotation == null || annotation.required();

        var authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()
                || authentication instanceof AnonymousAuthenticationToken) {

            if (required) {
                throw new AccessDeniedException("Вы должны войти в систему.");
            } else {
                return null;
            }
        }

        Object principal = authentication.getPrincipal();

        if (principal instanceof OAuth2User oauthUser) {
            String googleId = oauthUser.getAttribute("sub");
            if (googleId == null) {
                if (required) {
                    throw new AccessDeniedException("Google ID отсутствует в профиле.");
                } else {
                    return null;
                }
            }

            User user = userService.getUserByGoogleId(googleId);
            if (user == null && required) {
                throw new AccessDeniedException("Пользователь не найден.");
            }

            return user;
        }

        if (required) {
            throw new AccessDeniedException("Невозможно получить текущего пользователя.");
        }

        return null;
    }
}
