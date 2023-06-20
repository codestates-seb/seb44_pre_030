package com.example.server.answer.mapper;

import com.example.server.answer.dto.AnswerPostDto;
import com.example.server.answer.entity.Answer;
import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        //question, answer 객체 가져오기
        answer.setContent(answerPostDto.getContent());
        return answer;
    };
}
