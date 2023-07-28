package com.example.server.comment.mapper;

import com.example.server.answer.entity.Answer;
import com.example.server.comment.dto.CommentPatchDto;
import com.example.server.comment.dto.CommentPostDto;
import com.example.server.comment.dto.CommentResponseDto;
import com.example.server.comment.entity.Comment;
import com.example.server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel= "spring")
public interface CommentMapper {

    default Comment commentPostDtoComment(CommentPostDto commentPostDto) {
        Comment comment = new Comment();
        Member member = commentPostDto.getMember();
        Answer answer = commentPostDto.getAnswer();
        comment.setContent(commentPostDto.getContent());
        comment.setMember(member);
        comment.setAnswer(answer);

        return comment;
    }

    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);

    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
