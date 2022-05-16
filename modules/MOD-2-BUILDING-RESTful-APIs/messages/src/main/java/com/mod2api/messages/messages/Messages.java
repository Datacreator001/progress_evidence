package com.mod2api.messages.messages;

public class Messages {
    public Long id;
    public String message;

    public Messages(){}

    public Messages(String message) {
        this.message = message;
    }

    public Messages(Long id, String message) {
        this.id = id;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Messages{" +
                "id=" + id +
                ", message='" + message + '\'' +
                '}';
    }
}
