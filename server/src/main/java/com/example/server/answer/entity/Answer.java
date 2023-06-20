package com.example.server.answer.entity;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @ManyToOne
    @JoinColumn(name = "questionId")
    Question question;

    @ManyToOne
    @JoinColumn(name = "memberId")
    Member member;

    @Column(nullable=false)
    String content;

    Long vote;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    LocalDateTime createdAt = LocalDateTime.now();;
}
