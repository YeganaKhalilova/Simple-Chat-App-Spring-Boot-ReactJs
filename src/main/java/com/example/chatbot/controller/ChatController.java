package com.example.chatbot.controller;

import com.example.chatbot.model.ChatMassage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class ChatController {
    @MessageMapping("/chat")
    @SendTo("/topic/messages")

    public ChatMassage sendMassage(@Payload ChatMassage chatMassage){
        chatMassage.setTimeStamp(new Date());
        return chatMassage;
    }

}
