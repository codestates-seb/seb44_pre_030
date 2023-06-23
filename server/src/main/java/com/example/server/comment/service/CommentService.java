package com.example.server.comment.service;

import com.example.server.comment.entity.Comment;
import com.example.server.comment.helper.CommentServiceHelper;
import com.example.server.comment.repository.CommentRepository;
import com.example.server.exception.BusinessLogicException;
import com.example.server.exception.ErrorResponse;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService implements CommentServiceHelper {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        Comment newComment = postComment(comment);

        return commentRepository.save(newComment);
    }

    public Comment updateComment(Comment comment) {

        Comment findComment = findVerifiedComment(comment.getId());

        return commentRepository.save(patchComment(comment, findComment));
    }

    public void deleteComment(long commentId) {
        Comment comment = findVerifiedComment(commentId);
        commentRepository.delete(comment);
    }

    public Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment= commentRepository.findById(commentId);

        Comment findComment =
                optionalComment.orElseThrow(()->
                        new BusinessLogicException(ErrorResponse.COMMENT_NOT_FOUND));
        return findComment;
    }

    public Comment findComment(long commentId) {
        Comment comment = findVerifiedComment(commentId);
        return comment;
    }
}
