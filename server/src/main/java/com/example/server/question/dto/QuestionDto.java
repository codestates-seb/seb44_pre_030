package com.example.server.question.dto;

import com.example.server.answer.entity.Answer;
import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

// 유효성 검사 프론트엔드분과 함께 작업 (맞추기) -> Entity 수정
public class QuestionDto {
    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        private String title;
        private String content;
    }

    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch{
        private long id;
        private Member member;
        private String title;
        private String content;
        private Long view;
        private Long vote;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private long id;
        private Member member;
        private String title;
        private String content;
        private Long view;
        private Long vote;
        private Long answer_count;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailResponse{
        private long id;
        private Member member;
        private List<Answer> answers;
        private String title;
        private String content;
        private Long view;
        private Long vote;
        private Long answer_count;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
