package com.example.server.comment.helper;


import com.example.server.comment.entity.Comment;
import com.example.server.exception.ErrorResponse;

import java.time.LocalDateTime;
import java.util.Optional;

public interface CommentServiceConfigurerHelper {
    default Comment postComment(Comment comment) {
        if(comment == null) {
            throw new RuntimeException(ErrorResponse.COMMENT_NOT_FOUND.getErrorStatus());
        }
        if(comment.getAnswer() == null) {
            throw new RuntimeException(ErrorResponse.ANSWER_NOT_FOUND.getErrorStatus());
        }

        return Comment.builder()
                .id(comment.getId())
                .member(comment.getMember())
                .answer(comment.getAnswer())
                .content(comment.getContent())
                .createdAt(LocalDateTime.now())
                .build();
    }

    default Comment patchComment(Comment comment, Comment result) {
        Optional.ofNullable(comment.getContent())
                .ifPresent(result::setContent);

        return result;
    }
}
