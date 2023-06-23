package com.example.server.answer.helper;

import com.example.server.answer.entity.Answer;
import com.example.server.exception.ErrorResponse;

import java.time.LocalDateTime;
import java.util.Optional;

public interface AnswerServiceConfigureHelper {
    default Answer postAnswer(Answer answer) {
        if(answer == null) {
            throw new RuntimeException(ErrorResponse.ANSWER_NOT_FOUND.getErrorStatus());
        }

        if(answer.getMember() == null) {
            throw new RuntimeException(ErrorResponse.MEMBER_NOT_FOUND.getErrorStatus());
        }

        return Answer.builder()
                .id(answer.getId())
                .member(answer.getMember())
                .question(answer.getQuestion())
                .comments(answer.getComments())
                .content(answer.getContent())
                .vote(0L)
                .createdAt(LocalDateTime.now())
                .build();
    }

    default Answer patchAnswer(Answer answer, Answer result) {
        Optional.ofNullable(answer.getContent())
                .ifPresent(answer::setContent);
        Optional.ofNullable(answer.getVote())
                .ifPresent(answer::setVote);
        return result;
    }
}
