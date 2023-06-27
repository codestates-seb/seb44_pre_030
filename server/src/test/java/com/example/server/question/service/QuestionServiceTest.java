package com.example.server.question.service;

import com.example.server.member.entity.Member;
import com.example.server.question.entity.Question;
import com.example.server.question.repository.QuestionRepository;
import com.example.server.question.stubData.StubData;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
public class QuestionServiceTest {

    @InjectMocks
    private QuestionService questionService;
    @Mock
    private QuestionRepository questionRepository;

    @Test
    @DisplayName("질문 생성 테스트")
    public void createQuestionTest(){

        // MockData
        Question Mockquestion = Question.builder()
                .id(1L)
                .member(new Member())
                .title("Test")
                .content("Test")
                .view(0L)
                .vote(0L)
                .build();

        when(questionRepository.save(Mockito.any(Question.class))).thenReturn(Mockquestion); // MockData 반환

        Question question = new Question();
        question.setTitle("Test1");
        question.setMember(new Member());

        Question createdQuestion = questionService.createQuestion(questionService.postQuestion(question));

        Assertions.assertEquals(Mockquestion,createdQuestion);


    }

}
