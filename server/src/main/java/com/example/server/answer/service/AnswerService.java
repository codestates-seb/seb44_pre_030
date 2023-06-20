package com.example.server.answer.service;

import com.example.server.answer.entity.Answer;
import com.example.server.answer.repositroy.AnswerRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        //TODO: verify user does not have a answer previously

        Answer createdAnswer = new Answer();
        return answerRepository.save(answer);
    }
}
