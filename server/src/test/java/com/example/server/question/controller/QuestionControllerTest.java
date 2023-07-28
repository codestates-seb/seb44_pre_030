package com.example.server.question.controller;

import com.example.server.member.entity.Member;
import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import com.example.server.question.gsonConfigure.LocalDateTimeDeserializer;
import com.example.server.question.gsonConfigure.LocalDateTimeSerializer;
import com.example.server.question.helper.QuestionControllerHelper;
import com.example.server.question.helper.TestHelper;
import com.example.server.question.mapper.QuestionMapper;
import com.example.server.question.response.MultiResponse;
import com.example.server.question.service.QuestionService;
import com.example.server.question.stubData.StubData;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpMethod;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

import static org.hamcrest.Matchers.hasToString;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;

@AutoConfigureMockMvc
@SpringBootTest
public class QuestionControllerTest implements QuestionControllerHelper, TestHelper{

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;
    @MockBean
    private QuestionService questionService;
    @MockBean
    private QuestionMapper questionMapper;
    private ResultActions resultActions;
    private Question question;
    private QuestionDto.Post post;
    private QuestionDto.Patch patch;
    private QuestionDto.Response patchResponse;
    private QuestionDto.DetailResponse getResponse;
    private String content;

    @BeforeEach
    public void init(){
        question = StubData.MockQuestion.getQuestion();
        post = (QuestionDto.Post) StubData.MockQuestion.getStubDataRequestBody(HttpMethod.POST); // RequestBody
        patchResponse = (QuestionDto.Response) StubData.MockQuestion.getStubDataResponseBody(HttpMethod.GET);
        getResponse = (QuestionDto.DetailResponse) StubData.MockQuestion.getStubDataGetResponseBody(HttpMethod.GET);

        // LocalDateTime 오류 -> Json 형태로 직렬화
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(LocalDateTime.class, new LocalDateTimeSerializer());
        gson = gsonBuilder.setPrettyPrinting().create();
    }

    @Override
    @Test
    @DisplayName("질문 생성 테스트")
    public void PostQuestionTest() throws Exception {

        content = gson.toJson(post);
        URI uri = postUri();

        given(questionMapper.PostToEntity(Mockito.any(QuestionDto.Post.class))).willReturn(new Question());
        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(question);

        resultActions = mockMvc.perform(postBuilder(uri,content));

        postTest(resultActions);

    }

    @Override
    @Test
    @DisplayName("질문 수정 테스트")
    public void PatchQuestionTest() throws Exception {

        patch = QuestionDto.Patch.builder().title("title").content("Content").build();

        URI uri = patchUri(question.getId());
        content = gson.toJson(patch);

        given(questionMapper.PatchToEntity(Mockito.any(QuestionDto.Patch.class))).willReturn(new Question());
        given(questionService.updateQuestion(Mockito.any(Question.class))).willReturn(new Question());
        given(questionMapper.EntityToResponse(Mockito.any(Question.class))).willReturn(patchResponse);

        resultActions = mockMvc.perform(patchBuilder(uri,content));

        patchTest(resultActions);

    }

    @Override
    @Test
    @DisplayName("질문 조회 테스트")
    public void GetQuestionTest() throws Exception {

        Member member = Member.builder()
                .id(1L)
                .email("Test@Test.com")
                .displayName("Test")
                .build();

        URI uri = getResoueceUri(question.getId(),member.getId());

        given(questionService.findQuestion(Mockito.anyLong(),Mockito.anyLong())).willReturn(new Question());
        given(questionMapper.EntityToDetailResponse(Mockito.any(Question.class))).willReturn(getResponse);

        resultActions = mockMvc.perform(getBuilder(uri));
        getTest(resultActions);

    }

    @Override
    @Test
    @DisplayName("질문 리스트 조회 테스트")
    public void ListOfGetQuestionTest() throws Exception {

        URI uri = getMainOfListUri();

        List<QuestionDto.Response> responseList = StubData.MockQuestion.getListOfStubDataResponseBody(HttpMethod.GET);
        Page<Question> questionList = StubData.MockQuestion.getListOfPageResponseBody(HttpMethod.GET);
        MultiValueMap<String,String> params = StubData.MockQuestion.getPageInfo();

        given(questionService.ListOfFindQuestion(Mockito.anyInt(),Mockito.anyInt())).willReturn(questionList);
        given(questionMapper.ListEntityToListResponse(Mockito.anyList())).willReturn(responseList);

        resultActions = mockMvc.perform(getListOfMainPageBuilder(uri,params));

        getMainPageTest(resultActions);
    }

    @Override
    @Test
    @DisplayName("질문 삭제 테스트")
    public void DeleteQuestionTest() throws Exception {

        URI uri = getDeleteUri(question.getId());

        resultActions = mockMvc.perform(deleteBuilder(uri));
        deleteTest(resultActions);
    }
}
