package com.mod2api.messages.messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    private final MessageRepo messageRepo;
@Autowired
    public MessageService(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    public List<Messages> getMessages(){

               return messageRepo.findAll();

    }

    public void addNewMessage(Messages messages) {
        messageRepo.save(messages);
    }
}
