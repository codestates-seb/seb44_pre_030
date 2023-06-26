package com.example.server.question.entity;

import com.example.server.answer.entity.Answer;
import com.example.server.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;
    @OneToMany(mappedBy = "question")
    @JsonManagedReference
    private List<Answer> answers;
    @Column(nullable = false, length = 100)
    private String title;
    @Column(nullable = false, length = 1000)
<<<<<<< HEAD
    private String content;
    private Long view;
    private Long vote;
    private Long answerCount;
=======
    private String content; // 글 내용

    private Long view; // 조회수 -> EndPoint 요청에 응답했을 시 (* 보류사항 : 쿠키사용 가능 시 1회원 당 1뷰 로직 작성)
    private Long vote; // 좋아요 수
    private Long selectedAnswerId; // 채택된 답변의 id
>>>>>>> d8869a509edfabde6a5c0280fad2cab6b02b4f1b
    @CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;
    @LastModifiedDate
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime modifiedAt;
}
