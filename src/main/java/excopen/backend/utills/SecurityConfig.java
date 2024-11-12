package excopen.backend.utills;

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