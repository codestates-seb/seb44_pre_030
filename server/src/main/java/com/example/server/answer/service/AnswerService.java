package com.example.server.answer.service;

import com.example.server.answer.entity.Answer;
import com.example.server.answer.repositroy.AnswerRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        //TODO: verify answer
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getId());
        return answerRepository.save(answer);
    }

    public void cancelAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        //TODO: use custom error object after merge
        Answer findAnswer =
                optionalAnswer.orElseThrow(()->
                        new Error());
        return findAnswer;
    }
}
