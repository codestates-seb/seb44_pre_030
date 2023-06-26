package com.example.server.member.security;

import com.example.server.member.security.oauth.CustomOauth2UserService;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.CustomAutowireConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CustomUserDetailService customUserDetailService;
    private final CustomOauth2UserService customOauth2UserService;
    private final CustomLoginSuccessHandler customLoginSuccessHandler;
    private final CustomOauthSuccessHandler customOauthSuccessHandler;
    private final CustomLoginFailureHandler customLoginFailureHandler;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().mvcMatchers("/favicon.ico");

        super.configure(web);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .httpBasic()
                .and()
                .cors()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/", "/css/**", "/images/**", "/js/**", "/h2-console/**").permitAll()
//                .antMatchers("/members/email").permitAll()
//                .antMatchers("/members/email/check").permitAll()
//                .antMatchers("/members/**").hasAuthority("ROLE_USER")
//                .antMatchers(HttpMethod.POST, "/questions/**").hasAuthority("ROLE_USER")
//                .antMatchers(HttpMethod.PATCH, "/questions/**").hasAuthority("ROLE_USER")
//                .antMatchers(HttpMethod.DELETE, "/questions/**").hasAuthority("ROLE_USER")
//                .antMatchers(HttpMethod.POST, "/answers/**").hasAuthority("ROLE_USER")
//                .antMatchers(HttpMethod.PATCH, "/answers/**").hasAuthority("ROLE_USER")
//                .antMatchers(HttpMethod.DELETE, "/answers/**").hasAuthority("ROLE_USER")
//                .antMatchers("/**/create/**").hasAuthority("ROLE_USER")
                .anyRequest().permitAll()
                .and()
                .formLogin()
//                .loginPage("/login")
//                .usernameParameter("email")
                .loginProcessingUrl("/members/login")
                .successHandler(customLoginSuccessHandler)
                .failureHandler(customLoginFailureHandler)
                .failureForwardUrl("/members/login/fail")
                .and()
                .logout()
                .logoutUrl("/logout")
                .and()
                .oauth2Login()
//                .loginPage("/login")
                .loginProcessingUrl("/members/oauth")
//                .successHandler(customOauthSuccessHandler)
                .defaultSuccessUrl("/members/login/success")
                .userInfoEndpoint()
                .userService(customOauth2UserService);
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CustomAuthenticationProvider customAuthenticationProvider(){
        return new CustomAuthenticationProvider(customUserDetailService, passwordEncoder());
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception{
        authenticationManagerBuilder.authenticationProvider(customAuthenticationProvider());
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowCredentials(false);
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
