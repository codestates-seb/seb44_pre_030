package com.example.server.question.dto;

import com.example.server.comment.entity.Comment;
import com.example.server.question.entity.Question;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnswerDto {
    private Long id;
    private MemberDto member;
    private List<CommentDto> comments;
    private String content;
    private Long vote;
    private LocalDateTime createdAt;
}
