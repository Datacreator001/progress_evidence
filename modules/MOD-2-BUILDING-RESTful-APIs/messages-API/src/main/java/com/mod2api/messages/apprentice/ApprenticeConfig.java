package com.mod2api.messages.apprentice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;
@Configuration
public class ApprenticeConfig {
    @Bean
    CommandLineRunner commandLineRunner(ApprenticeRepo repo){
        return args -> {
            Apprentice Nick= new Apprentice(
                    "Nick"
            );
            Apprentice Ian= new Apprentice(
                    "Ian"
            );

            repo.saveAll(
                    List.of(Nick,Ian)
            );
        };
    }
}
