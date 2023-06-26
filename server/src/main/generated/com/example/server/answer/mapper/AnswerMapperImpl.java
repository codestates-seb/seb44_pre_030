package com.example.server.answer.mapper;

import com.example.server.answer.dto.AnswerPatchDto;
import com.example.server.answer.dto.AnswerResponseDto;
import com.example.server.answer.entity.Answer;
import com.example.server.answer.entity.Answer.AnswerBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-25T22:51:44+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

        answer.id( answerPatchDto.getId() );
        answer.content( answerPatchDto.getContent() );
        answer.vote( answerPatchDto.getVote() );

        return answer.build();
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setMember( answer.getMember() );
        answerResponseDto.setQuestion( answer.getQuestion() );
        answerResponseDto.setContent( answer.getContent() );
        if ( answer.getVote() != null ) {
            answerResponseDto.setVote( answer.getVote() );
        }
        answerResponseDto.setCreatedAt( answer.getCreatedAt() );

        return answerResponseDto;
    }
}
