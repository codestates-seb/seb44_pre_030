package com.example.server.answer.entity;

import com.example.server.comment.entity.Comment;
import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
    @JsonBackReference
    Question question;

    @ManyToOne
    @JoinColumn(name = "memberId")
    Member member;

    @OneToMany(mappedBy = "answer")
    @JsonManagedReference
    private List<Comment> comments;

    @Column(nullable=false)
    String content;

    Long vote;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    LocalDateTime createdAt = LocalDateTime.now();;
}
