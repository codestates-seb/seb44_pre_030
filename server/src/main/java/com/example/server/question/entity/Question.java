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
    Long id; // 질문 Id

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member; // 작성자, 작성자 id, 작성자 사진 url 은 회원 로직 작성 완료 후 데이터 입력 예정
    @OneToMany(mappedBy = "question")
    @JsonManagedReference
    private List<Answer> answers; // answer 매핑관계

    @Column(nullable = false, length = 100)
    private String title; // 글 제목
    @Column(nullable = false, length = 1000)
    private String content; // 글 내용

    private Long view; // 조회수 -> EndPoint 요청에 응답했을 시 (* 보류사항 : 쿠키사용 가능 시 1회원 당 1뷰 로직 작성)
    private Long vote; // 좋아요 수
    @CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt; // 작성날짜
    @LastModifiedDate
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime modifiedAt; // 수정된 날짜
}
