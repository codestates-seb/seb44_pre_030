package com.example.server.answer.dto;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
public class AnswerPostDto {
    @Positive
    private long questionId;

    @Positive
    private long memberId;

    @NotBlank(message = "내용은 공백이 아니어야 합니다.")
    private String content;

    //question 객체와 멤버 객체 가지고 오기
}
