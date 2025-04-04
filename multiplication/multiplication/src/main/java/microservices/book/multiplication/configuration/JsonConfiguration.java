package microservices.book.multiplication.configuration;

import com.fasterxml.jackson.datatype.hibernate5.jakarta.Hibernate5JakartaModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JsonConfiguration
{
    @Bean
    public Hibernate5JakartaModule hibernateModule(){
        return new Hibernate5JakartaModule();
    }
}
