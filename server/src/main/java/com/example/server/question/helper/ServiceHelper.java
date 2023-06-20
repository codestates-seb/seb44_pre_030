package com.example.server.question.helper;

import com.example.server.member.entity.Member;
import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import com.example.server.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.Optional;

public interface ServiceHelper extends ServiceConfigureHelper{

    Question createQuestion(Question question);
    Question updateQuestion(Question question);
    Question findQuestion(long QuestionId);
    Page<Question> ListOfFindQuestion(int page, int size);
    void deleteQuestion(long QuestionId);

}
