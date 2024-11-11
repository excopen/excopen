package T_Bank.Back.Utills;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .authorizeHttpRequests(authorizeRequests ->
//                        authorizeRequests
//                                .requestMatchers("/", "/login**").permitAll() // Разрешаем доступ к главной странице и логину
//                                .anyRequest().authenticated() // Остальные запросы требуют аутентификации
//                )
//                .oauth2Login(oauth2Login ->
//                        oauth2Login
//                                .defaultSuccessUrl("/home") // Перенаправление после успешного логина
//                                .failureUrl("/login?error=true")
//                );
//        return http.build();
//    }
//}