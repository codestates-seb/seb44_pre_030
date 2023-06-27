package com.example.server.answer.helper;

import com.example.server.answer.entity.Answer;

public interface AnswerServiceHelper extends AnswerServiceConfigureHelper {
    Answer createAnswer(Answer answer);
    Answer updateAnswer(Answer answer);
    Answer findAnswer(long answerId);
    void deleteAnswer(long answerId);

}
