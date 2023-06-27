package com.example.server.answer.mapper;

import com.example.server.answer.dto.AnswerPatchDto;
import com.example.server.answer.dto.AnswerPostDto;
import com.example.server.answer.dto.AnswerResponseDto;
import com.example.server.answer.entity.Answer;
import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        Member member = answerPostDto.getMember();
        Question question = answerPostDto.getQuestion();

        answer.setContent(answerPostDto.getContent());
        answer.setMember(member);
        answer.setQuestion(question);
        return answer;
    };

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

}
