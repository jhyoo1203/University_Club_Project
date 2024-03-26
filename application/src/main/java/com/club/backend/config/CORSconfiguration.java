package com.club.backend.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSconfiguration {

//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(@NonNull CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedOriginPatterns("*")
//                        .allowedMethods("GET", "POST", "PATCH")
//                        .allowedHeaders("*")
//                        .allowCredentials(true);
//            }
//        };
//    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(@NonNull CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://www.gwnueum.com")
                        .allowedMethods("GET", "POST", "PATCH")
                        .allowedHeaders("Authorization", "Content-Type")
                        .allowCredentials(false);
            }
        };
    }
}
