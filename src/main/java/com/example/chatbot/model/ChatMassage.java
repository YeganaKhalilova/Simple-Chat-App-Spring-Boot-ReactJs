package com.example.chatbot.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

public class ChatMassage {

    private String name;
    private String content;
    private Date timeStamp;

}
