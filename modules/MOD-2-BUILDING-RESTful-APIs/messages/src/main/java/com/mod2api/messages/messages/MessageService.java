package com.mod2api.messages.messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

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

    public void deleteMessage(Long messageId) {
       boolean exists = messageRepo.existsById(messageId);
       if(exists){
           messageRepo.deleteById(messageId);
       }

    }

    public List<Messages> getMessage(Long messageId) {
        messageRepo.findById(messageId);
        return null;
    }

    @Transactional
    public void updateMessage(Long messageId, String message) {
        Messages messages = messageRepo.findById(messageId)
                .orElseThrow(()-> new IllegalStateException(
                        "message with id " + messageId + " does not exist"
                ));
        if(message !=null &&  message.length() > 0 && !Objects.equals(messages.getMessage(), message)){
            messages.setMessage(message);
        }
    }
}
