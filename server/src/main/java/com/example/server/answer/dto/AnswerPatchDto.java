package com.example.server.answer.dto;

import com.example.server.answer.entity.Answer;
import lombok.Getter;

@Getter
public class AnswerPatchDto {
    private long id;
    private String content;
    public void setId(long id) {
        this.id = id;
    }
}
