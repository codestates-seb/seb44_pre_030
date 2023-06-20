package com.example.server.comment.controller;

import com.example.server.comment.dto.CommentPatchDto;
import com.example.server.comment.dto.CommentPostDto;
import com.example.server.comment.entity.Comment;
import com.example.server.comment.mapper.CommentMapper;
import com.example.server.comment.service.CommentService;
import com.example.server.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/comments")
@Validated
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto commentPostDto) {
        Comment comment = commentService.createComment(mapper.commentPostDtoToComment(commentPostDto));

        URI location = UriCreator.createUri("/comments", comment.getId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentPatchDto commentPostDto) {
        Comment comment = commentService.updateComment(mapper.commentPatchDtoToComment(commentPostDto));
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("{comment-id}")
    public ResponseEntity cancelComment(@PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
