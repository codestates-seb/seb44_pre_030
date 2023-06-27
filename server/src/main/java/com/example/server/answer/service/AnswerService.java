package com.example.server.answer.service;

import com.example.server.answer.entity.Answer;
import com.example.server.answer.helper.AnswerServiceHelper;
import com.example.server.answer.repositroy.AnswerRepository;
import com.example.server.exception.BusinessLogicException;
import com.example.server.exception.ErrorResponse;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService implements AnswerServiceHelper {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {

        Answer newAnswer = postAnswer(answer);

        return answerRepository.save(newAnswer);
    }

    public Answer updateAnswer(Answer answer) {

        Answer result = findVerifiedAnswer(answer.getId());
        Answer updatedAnswer = patchAnswer(answer, result);

        return answerRepository.save(updatedAnswer);
    }

    public void deleteAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);
    }
    public Answer findAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        return answer;
    }
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);

        Answer findAnswer =
                optionalAnswer.orElseThrow(()->
                        new BusinessLogicException(ErrorResponse.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
