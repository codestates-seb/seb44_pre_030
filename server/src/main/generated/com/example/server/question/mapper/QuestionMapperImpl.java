package com.example.server.question.mapper;

import com.example.server.question.dto.QuestionDto.Patch;
import com.example.server.question.dto.QuestionDto.Post;
import com.example.server.question.dto.QuestionDto.Response;
import com.example.server.question.dto.QuestionDto.Response.ResponseBuilder;
import com.example.server.question.entity.Question;
import com.example.server.question.entity.Question.QuestionBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-19T16:26:57+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question PostToEntity(Post post) {
        if ( post == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.title( post.getTitle() );
        question.content( post.getContent() );

        return question.build();
    }

    @Override
    public Question PatchToEntity(Patch patch) {
        if ( patch == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.id( patch.getId() );
        question.member( patch.getMember() );
        question.title( patch.getTitle() );
        question.content( patch.getContent() );
        question.view( patch.getView() );
        question.vote( patch.getVote() );
        question.createdAt( patch.getCreatedAt() );
        question.modifiedAt( patch.getModifiedAt() );

        return question.build();
    }

    @Override
    public Response EntityToResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        if ( question.getId() != null ) {
            response.id( question.getId() );
        }
        response.member( question.getMember() );
        response.title( question.getTitle() );
        response.content( question.getContent() );
        response.view( question.getView() );
        response.vote( question.getVote() );
        response.answer_count( question.getAnswer_count() );
        response.createdAt( question.getCreatedAt() );
        response.modifiedAt( question.getModifiedAt() );

        return response.build();
    }

    @Override
    public List<Response> ListEntityToListResponse(List<Question> questionList) {
        if ( questionList == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( questionList.size() );
        for ( Question question : questionList ) {
            list.add( EntityToResponse( question ) );
        }

        return list;
    }
}
