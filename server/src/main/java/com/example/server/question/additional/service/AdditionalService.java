package com.example.server.question.additional.service;

import com.example.server.exception.BusinessLogicException;
import com.example.server.exception.ErrorResponse;
import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import com.example.server.question.entity.Question;
import com.example.server.question.repository.QuestionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@Slf4j
public class AdditionalService {

    private final QuestionRepository questionRepository;
    private final MemberJpaRepository memberJpaRepository;

    public AdditionalService(QuestionRepository questionRepository, MemberJpaRepository memberJpaRepository) {
        this.questionRepository = questionRepository;
        this.memberJpaRepository = memberJpaRepository;
    }
    public Question countLike(long questionId,long memberId){

        // Question 정보 찾기
        Question question = findExistQuestion(questionId);
        // Member 정보 찾기
        Member member = memberJpaRepository.findMemberByMemberId(memberId);

        // Member Like 가 false 일때만 증가
        if(!member.isVerifiedLike()){
            member.setVerifiedLike(true); // 좋아요를 누르게 되면 true
            question.setVote(question.getVote() + 1);
            log.info("DataBase Id : " + member.getId() + " 회원이 좋아요를 눌렀습니다." );
            log.info("DataBase Id : " + question.getId() + " 게시글 좋아요 수 : " + question.getVote());
        }
        else{
            throw new BusinessLogicException(ErrorResponse.LIKE_ALREADY_PRESS);
        }

        return question;
    }
    public Question unCountLike(long questionId,long memberId){

        Question question = findExistQuestion(questionId);
        Member member = memberJpaRepository.findMemberByMemberId(memberId);

        if(member.isVerifiedLike()){
            member.setVerifiedLike(false); // 좋아요를 취소하면 false
            question.setVote(question.getVote() - 1);
            log.info("DataBase Id : " + member.getId() + " Unlike" );
            log.info("초기 상태");
        }
        else{
            throw new BusinessLogicException(ErrorResponse.UNLIKE_NOT_PRESS);
        }

        return question;
    }
    private Question findExistQuestion(long id){

        Optional<Question> findQuestion = questionRepository.findById(id);

        return findQuestion.orElseThrow(
                () -> new BusinessLogicException(ErrorResponse.QUESTION_NOT_FOUND));
    }
}
