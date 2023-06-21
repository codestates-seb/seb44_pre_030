package com.example.server.comment.dto;

import com.example.server.answer.entity.Answer;
import com.example.server.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private long memberId;
    private long answerId;
    private String content;
    private LocalDateTime createdAt;

    public void setMember(Member member) {
        this.memberId = member.getId();
    }

    public void setAnswer(Answer answer) {
        this.answerId = answer.getId();
    }
}
