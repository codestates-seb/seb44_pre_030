package com.example.server.question.helper;

import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import com.example.server.question.stubData.StubData;
import org.mockito.Mockito;
import org.springframework.http.HttpMethod;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static org.aspectj.apache.bcel.classfile.AttributeUtils.accept;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public interface TestHelper {

    default void postTest(ResultActions resultActions) throws Exception {

        resultActions
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value(StubData.MockQuestion.getQuestion().getTitle()))
                .andExpect(jsonPath("$.content").value(StubData.MockQuestion.getQuestion().getContent()))
                .andExpect(jsonPath("$.view").value(StubData.MockQuestion.getQuestion().getView()))
                .andExpect(jsonPath("$.vote").value(StubData.MockQuestion.getQuestion().getVote()));;
    }

    default void patchTest(ResultActions resultActions) throws Exception {

        resultActions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(StubData.MockQuestion.getQuestion().getTitle()))
                .andExpect(jsonPath("$.content").value(StubData.MockQuestion.getQuestion().getContent()))
                .andExpect(jsonPath("$.view").value(StubData.MockQuestion.getQuestion().getView()))
                .andExpect(jsonPath("$.vote").value(StubData.MockQuestion.getQuestion().getVote()));
    }

    default void getTest(ResultActions resultActions) throws Exception {

        resultActions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(StubData.MockQuestion.getQuestion().getTitle()))
                .andExpect(jsonPath("$.content").value(StubData.MockQuestion.getQuestion().getContent()))
                .andExpect(jsonPath("$.view").value(StubData.MockQuestion.getQuestion().getView()))
                .andExpect(jsonPath("$.vote").value(StubData.MockQuestion.getQuestion().getVote()));
    }

    default void getMainPageTest(ResultActions resultActions) throws Exception {

        // 테스트 Question
        Question question1 =  Question.builder().title("title1").content("Content1").build();
        Question question2 = Question.builder().title("title2").content("Content2").build();

        resultActions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data[0].title").value(question1.getTitle()))
                .andExpect(jsonPath("$.data[1].title").value(question2.getTitle()))
                .andExpect(jsonPath("$.data[0].content").value(question1.getContent()))
                .andExpect(jsonPath("$.data[1].content").value(question2.getContent()));

    }

    default void deleteTest(ResultActions resultActions) throws Exception {

        resultActions
                .andExpect(status().isNoContent());
    }

}
