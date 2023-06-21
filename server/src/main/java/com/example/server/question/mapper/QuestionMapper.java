package com.example.server.question.mapper;

import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question PostToEntity(QuestionDto.Post post);
    Question PatchToEntity(QuestionDto.Patch patch);
    QuestionDto.Response EntityToResponse(Question question);

    QuestionDto.DetailResponse EntityToDetailResponse(Question question);
    List<QuestionDto.Response> ListEntityToListResponse(List<Question> questionList);
}
