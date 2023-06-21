package com.example.server.comment.dto;

import com.example.server.answer.entity.Answer;
import com.example.server.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

@Getter
@Setter
public class CommentPostDto {
    @Positive
    private long answerId;

    @Positive
    private long memberId;

    private String content;

    LocalDateTime createdAt;

    public Member getMember() {
        Member member = new Member();
        member.setId(memberId);
        return member;
    }

    public Answer getAnswer() {
        Answer answer = new Answer();
        answer.setId(answerId);
        return answer;
    }
}
