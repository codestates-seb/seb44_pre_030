package com.example.server.question.repository;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Long> {

    @Query("SELECT COUNT(a) FROM Answer a JOIN a.question q WHERE q = :question")
    long countAnswersByQuestion(@Param("question") Question question);

    @Modifying
    @Transactional
    @Query("DELETE FROM Answer a WHERE a.question = :question")
    void deleteAnswer(@Param("question") Question question);

    @Modifying
    @Transactional
    @Query("DELETE FROM Comment c WHERE c.answer IN (SELECT a FROM Answer a WHERE a.question = :question)")
    void deleteComment(@Param("question") Question question);

}
