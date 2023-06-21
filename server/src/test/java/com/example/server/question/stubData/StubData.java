package com.example.server.question.stubData;

import com.example.server.member.entity.Member;
import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import com.example.server.question.page.PageInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpMethod;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StubData {

    private static Question questionData;

    private static Map<HttpMethod,Object> stubDataRequestBody;
    private static Map<HttpMethod,Object> stubDataResponseBody;

    private static Map<HttpMethod,List<QuestionDto.Response>> ListOfStubDataResponseBody;
    private static Map<HttpMethod,List<Question>> ListOfPageResponseBody;

    private static MultiValueMap<String,String> page;

    static {
        // QuestionData Area
        questionData = Question.builder()
                .id(1L)
                .member(new Member())
                .title("title")
                .content("Content")
                .view(1L)
                .vote(1L)
                .answer_count(0L)
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();

        // RequestBody Area
        stubDataRequestBody = new HashMap<>();
        stubDataRequestBody.put(HttpMethod.POST, new QuestionDto.Post("title","Content"));

        // ResponseBody Area
        stubDataResponseBody = new HashMap<>();
        stubDataResponseBody.put(HttpMethod.GET, new QuestionDto.Response(1L,new Member(),"title","Content",1L,1L,0L,LocalDateTime.now(),LocalDateTime.now()));

        // ListOfResponseBody Area
        ListOfStubDataResponseBody = new HashMap<>();
        ListOfStubDataResponseBody.put(HttpMethod.GET,List.of(
                new QuestionDto.Response(1L,new Member(),"title1","Content1",1L,1L,1L,LocalDateTime.now(),LocalDateTime.now()),
                new QuestionDto.Response(2L,new Member(),"title2","Content2",2L,2L,2L,LocalDateTime.now(),LocalDateTime.now())
        ));

        // ListOfPageResponseBody Area
        ListOfPageResponseBody = new HashMap<>();
        ListOfPageResponseBody.put(HttpMethod.GET,List.of(
                Question.builder().title("title1").content("Content1").build(),
                Question.builder().title("title2").content("Content2").build()
        ));


        // page Area
        page = new LinkedMultiValueMap<>();
        String pageCount = "1";
        String sizeCount = "1";
        page.add("page",pageCount);
        page.add("size",sizeCount);
    }

    public static class MockQuestion{
        public static Question getQuestion(){
            return questionData;
        }

        public static Object getStubDataRequestBody(HttpMethod httpMethod){
            return stubDataRequestBody.get(httpMethod);
        }

        public static Object getStubDataResponseBody(HttpMethod httpMethod){
            return stubDataResponseBody.get(httpMethod);
        }

        public static List<QuestionDto.Response> getListOfStubDataResponseBody(HttpMethod httpMethod){
            return ListOfStubDataResponseBody.get(httpMethod);
        }

        public static Page<Question> getListOfPageResponseBody(HttpMethod httpMethod){

            return new PageImpl<>(
                    ListOfPageResponseBody.get(HttpMethod.GET), PageRequest.of(1,1, Sort.by("id").descending()),2
            );
        }

        public static MultiValueMap<String,String> getPageInfo(){
            return page;
        }
    }


}
