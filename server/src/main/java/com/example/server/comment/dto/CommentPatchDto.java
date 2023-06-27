package com.example.server.comment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

@Getter
public class CommentPatchDto {
    private long id;
    private String content;
    public void setId(long id) {
        this.id = id;
    }
}
