package com.mod2api.messages.messages;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;
@Configuration
public class MessageConfig {
    @Bean
    CommandLineRunner commandLineRunner2(MessageRepo repo){
        return args -> {
            Messages helloThere = new Messages(
                    "hello there"
            );
            Messages helloWorld = new Messages(
                    "hello World"
            );
            repo.saveAll(
                    List.of(helloThere,helloWorld)
            );
        };
    }
}
