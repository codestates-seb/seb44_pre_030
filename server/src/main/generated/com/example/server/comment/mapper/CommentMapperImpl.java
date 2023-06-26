package com.example.server.comment.mapper;

import com.example.server.comment.dto.CommentPatchDto;
import com.example.server.comment.dto.CommentResponseDto;
import com.example.server.comment.entity.Comment;
import com.example.server.comment.entity.Comment.CommentBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-25T22:51:44+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto) {
        if ( commentPatchDto == null ) {
            return null;
        }

        CommentBuilder comment = Comment.builder();

        comment.id( commentPatchDto.getId() );
        comment.content( commentPatchDto.getContent() );

        return comment.build();
    }

    @Override
    public CommentResponseDto commentToCommentResponseDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentResponseDto commentResponseDto = new CommentResponseDto();

        commentResponseDto.setMember( comment.getMember() );
        commentResponseDto.setAnswer( comment.getAnswer() );
        commentResponseDto.setContent( comment.getContent() );
        commentResponseDto.setCreatedAt( comment.getCreatedAt() );

        return commentResponseDto;
    }
}
