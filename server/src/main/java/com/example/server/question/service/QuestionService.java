package com.example.server.question.service;

import com.example.server.exception.BusinessLogicException;
import com.example.server.exception.ErrorResponse;
import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import com.example.server.question.helper.ServiceHelper;
import com.example.server.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class QuestionService implements ServiceHelper {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public Question createQuestion(Question question) {

        VerifiedExistQuestion(question.getId()); // 고유 질문 id 중복 여부

        Question firstQuestion = postQuestion(question); // 초기설정 Question

        return questionRepository.save(firstQuestion);
    }

    @Override
    public Question updateQuestion(Question question) {

        Question result = findExistQuestion(question.getId());

        return questionRepository.save(patchQuestion(question,result));
    }

    @Override
    public Question findQuestion(long QuestionId) {

        // 멤버가 조회를 할때마다 View 하나씩 증가
        Question question = findExistQuestion(QuestionId);

        return questionRepository.save(question);
    }

    @Override
    public Page<Question> ListOfFindQuestion(int page, int size) {

        return questionRepository.findAll(
                PageRequest.of(page,size, Sort.by("id"))); // 임의로 정렬은 Id 만일 추가 매게변수가 온다면 추가후 내부에 할당 예정
    }

    @Override
    public void deleteQuestion(long QuestionId) {

        Question question = findExistQuestion(QuestionId);

        questionRepository.deleteById(question.getId());
    }

    // Question -> 데이터베이스에 없다면 에러 발생

    private void VerifiedExistQuestion(long id){

        Optional<Question> ExistQuestion = questionRepository.findById(id);

        if(ExistQuestion.isPresent()){
            throw new BusinessLogicException(ErrorResponse.QUESTION_EXIST);
        }
    }

    private Question findExistQuestion(long id){

        Optional<Question> findQuestion = questionRepository.findById(id);

        return findQuestion.orElseThrow(
                () -> new BusinessLogicException(ErrorResponse.QUESTION_NOT_FOUND));
    }
}
