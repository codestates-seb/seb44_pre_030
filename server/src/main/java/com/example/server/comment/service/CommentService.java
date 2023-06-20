package com.example.server.comment.service;

import com.example.server.answer.entity.Answer;
import com.example.server.comment.entity.Comment;
import com.example.server.comment.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {

        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findVerifiedComment(comment.getId());
        return commentRepository.save(comment);
    }

    public void deleteComment(long commentId) {
        Comment comment = findVerifiedComment(commentId);
        commentRepository.delete(comment);
    }

    public Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment= commentRepository.findById(commentId);
        //TODO: use custom error object after merge
        Comment fidnComment =
                optionalComment.orElseThrow(()->
                        new Error());
        return fidnComment;
    }


}
