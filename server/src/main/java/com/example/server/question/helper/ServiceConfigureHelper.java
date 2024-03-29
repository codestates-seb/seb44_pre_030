package com.example.server.question.helper;

import com.example.server.exception.ErrorResponse;
import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;

import java.time.LocalDateTime;
import java.util.Optional;

public interface ServiceConfigureHelper {
    default Question postQuestion(Question question){

        if(question == null){
            throw new RuntimeException(ErrorResponse.QUESTION_NOT_FOUND.getErrorStatus());
        }

        if(question.getMember() == null) {
            throw new RuntimeException(ErrorResponse.MEMBER_NOT_FOUND.getErrorStatus());
        }

        return Question.builder()
                .id(question.getId())
                .member(question.getMember())
                .title(question.getTitle())
                .content(question.getContent())
                .view(0L)
                .vote(0L)
                .answerCount(0L)
                .selectedAnswerId(0L)
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();
    }
    default Question patchQuestion(Question question,Question result){

        Optional.ofNullable(question.getTitle())
                .ifPresent(result::setTitle);
        Optional.ofNullable(question.getContent())
                .ifPresent(result::setContent);
        Optional.ofNullable(question.getView())
                .ifPresent(result::setView);
        Optional.ofNullable(question.getSelectedAnswerId())
                .ifPresent(result::setSelectedAnswerId);
        Optional.ofNullable(question.getVote())
                .ifPresent(result::setVote);
        Optional.ofNullable(question.getAnswerCount())
                .ifPresent(result::setAnswerCount);

        result.setModifiedAt(LocalDateTime.now());

        return result;
    }
    default void PlusView(Member member,Question question){
        if(!member.isVerifiedView()){
            member.setVerifiedView(true);
            question.setView(question.getView() + 1);
        }
    }
}
