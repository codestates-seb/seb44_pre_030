package com.example.server.answer.dto;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;

import java.time.LocalDateTime;

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
