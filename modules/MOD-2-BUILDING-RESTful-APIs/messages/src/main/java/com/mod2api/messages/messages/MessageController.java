package com.mod2api.messages.messages;

import com.mod2api.messages.apprentice.Apprentice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.List;
@RequestMapping(path= "api/v1/messages")
@RestController
public class MessageController {

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping(value = "/Directions")
    private String getDirections() {
        String url = "https://http-challenge.multiverse-coaches.io";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    private final MessageService messageService;
    @GetMapping
    public List<Messages> getMessages(){
        return messageService.getMessages();
    }
    @PostMapping
    public void addNewMessage(@RequestBody Messages messages){
        messageService.addNewMessage(messages);
    }
}
