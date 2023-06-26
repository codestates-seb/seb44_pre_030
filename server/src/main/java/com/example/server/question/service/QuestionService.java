package com.example.server.question.service;

import com.example.server.answer.entity.Answer;
import com.example.server.answer.repositroy.AnswerRepository;
import com.example.server.exception.BusinessLogicException;
import com.example.server.exception.ErrorResponse;
import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import com.example.server.question.entity.Question;
import com.example.server.question.helper.ServiceHelper;
import com.example.server.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class QuestionService implements ServiceHelper {

    private final QuestionRepository questionRepository;
    private final MemberJpaRepository memberJpaRepository;

    public QuestionService(QuestionRepository questionRepository, MemberJpaRepository memberJpaRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.memberJpaRepository = memberJpaRepository;
    }

    @Override
    public Question createQuestion(Question question) {

        Question firstQuestion = postQuestion(question); // 초기설정 Question

        return questionRepository.save(firstQuestion);
    }

    @Override
    public Question updateQuestion(Question question) {

        Question result = findExistQuestion(question.getId());

        return questionRepository.save(patchQuestion(question,result));
    }

    @Override
    public Question findQuestion(long QuestionId,long memberId) {

        Question question = findExistQuestion(QuestionId);
        Member member = findExistMember(memberId);
        PlusView(member,question);
        question.setAnswerCount(findAnswerCount(question));

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

    private Question findExistQuestion(long id){

        Optional<Question> findQuestion = questionRepository.findById(id);

        return findQuestion.orElseThrow(
                () -> new BusinessLogicException(ErrorResponse.QUESTION_NOT_FOUND));
    }

    private Member findExistMember(long id){

        Member member = memberJpaRepository.findMemberByMemberId(id);

        return member;
    }
    // 질문에 달린 답변 개수
    private long findAnswerCount(Question question){

        long count = questionRepository.countAnswersByQuestion(question);

        return count;
    }

}
