package com.example.server.question.dto;

import com.example.server.answer.entity.Answer;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Long id;
    private MemberDto memberDto;
    private String content;
    private LocalDateTime createdAt;

}
