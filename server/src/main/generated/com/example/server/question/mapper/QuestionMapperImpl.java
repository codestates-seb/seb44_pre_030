package com.example.server.question.mapper;

import com.example.server.answer.entity.Answer;
import com.example.server.question.dto.QuestionDto.DetailResponse;
import com.example.server.question.dto.QuestionDto.DetailResponse.DetailResponseBuilder;
import com.example.server.question.dto.QuestionDto.Patch;
import com.example.server.question.dto.QuestionDto.Post;
import com.example.server.question.dto.QuestionDto.Response;
import com.example.server.question.entity.Question;
import com.example.server.question.entity.Question.QuestionBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-22T16:40:30+0900",
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

        question.member( post.getMember() );
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
    public DetailResponse EntityToDetailResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        DetailResponseBuilder detailResponse = DetailResponse.builder();

        if ( question.getId() != null ) {
            detailResponse.id( question.getId() );
        }
        detailResponse.member( question.getMember() );
        List<Answer> list = question.getAnswers();
        if ( list != null ) {
            detailResponse.answers( new ArrayList<Answer>( list ) );
        }
        detailResponse.title( question.getTitle() );
        detailResponse.content( question.getContent() );
        detailResponse.view( question.getView() );
        detailResponse.vote( question.getVote() );
        detailResponse.createdAt( question.getCreatedAt() );
        detailResponse.modifiedAt( question.getModifiedAt() );

        return detailResponse.build();
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
