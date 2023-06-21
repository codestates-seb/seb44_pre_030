package com.example.server.question.controller;

import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import com.example.server.question.mapper.QuestionMapper;
import com.example.server.question.response.MultiResponse;
import com.example.server.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    // 질문 작성 페이지
    @PostMapping("/question/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {

        Question question = questionService.createQuestion(questionMapper.PostToEntity(post));

        return new ResponseEntity<>(questionMapper.EntityToResponse(question), HttpStatus.CREATED);
    }

    @PatchMapping("/question/edit/{id}")
    public ResponseEntity patchQuestion(@Positive @PathVariable("id") long id,
                                        @Valid @RequestBody QuestionDto.Patch patch) {
        patch.setId(id);

        Question question = questionService.updateQuestion(questionMapper.PatchToEntity(patch));

        return new ResponseEntity<>(questionMapper.EntityToResponse(question),HttpStatus.OK);


    }

    @GetMapping("/question/{id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("id") long id) {

        Question question = questionService.findQuestion(id);

        return new ResponseEntity(questionMapper.EntityToDetailResponse(question),HttpStatus.OK);
    }

    // 리스트 조회시 추가사항 : 정렬 최신순 및
    @GetMapping("/")
    public ResponseEntity ListOfGetQuestions(@Positive @RequestParam int page,
                                             @Positive @RequestParam int size) {

        Page<Question> questionPage = questionService.ListOfFindQuestion(page - 1,size);
        List<Question> questionList = questionPage.getContent();

        return new ResponseEntity<>(new MultiResponse<>(questionMapper.ListEntityToListResponse(questionList),questionPage),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("id") long id) {

        questionService.deleteQuestion(id);

        return ResponseEntity.noContent().build();
    }
}
