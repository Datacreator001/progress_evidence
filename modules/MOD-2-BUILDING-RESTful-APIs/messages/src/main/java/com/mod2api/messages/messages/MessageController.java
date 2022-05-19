package com.mod2api.messages.messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.List;
import java.util.Optional;

@RequestMapping(path= "messages")
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
    @GetMapping(path = "{messageId}")
    public List<Messages> getMessage(@PathVariable("messageId") Long messageId){
       return messageService.getMessage(messageId);
    }
    @PostMapping
    public void addNewMessage(@RequestBody Messages messages){
        messageService.addNewMessage(messages);
    }
    @DeleteMapping(path = "{messageId}")
    public void deleteMessage(@PathVariable("messageId") Long messageId){
        messageService.deleteMessage(messageId);
    }
    @PutMapping(path = "{messageId}")
    public void updateMessage(
            @PathVariable("messageId") Long messageId,
            @RequestParam(required = false) String message){
                messageService.updateMessage(messageId,message);
    }


}
