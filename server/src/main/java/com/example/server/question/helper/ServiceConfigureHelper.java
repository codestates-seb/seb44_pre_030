package com.example.server.question.helper;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;

import java.time.LocalDateTime;
import java.util.Optional;

public interface ServiceConfigureHelper {

    // Configure
    default Question postQuestion(Question question){

        return Question.builder()
                .title(question.getTitle())
                .content(question.getContent())
                .view(0L)
                .vote(0L)
                .answer_count(0L)
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
        Optional.ofNullable(question.getVote())
                .ifPresent(result::setVote);

        result.setModifiedAt(LocalDateTime.now());

        return result;
    }
}
