package com.example.server.answer.dto;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long memberId;
    private long questionId;
    private String content;
    private long vote;
    private LocalDateTime createdAt;

    public void setMember(Member member) {
        this.memberId = member.getId();
    }

    public void setQuestion(Question question) {
        this.questionId = question.getId();
    }
}
