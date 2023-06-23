package com.example.server.comment.helper;

import com.example.server.comment.entity.Comment;

public interface CommentServiceHelper extends CommentServiceConfigurerHelper {
    Comment createComment(Comment comment);
    Comment updateComment(Comment comment);
    Comment findComment(long commentId);
    void deleteComment(long commentId);
}
