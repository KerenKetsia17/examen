package isi.diti.class_service.repository;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permet les requêtes depuis le frontend React (localhost:3000)
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // URL de votre frontend React
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Méthodes autorisées
                .allowedHeaders("*");
    }
}

