package com.example.server.question.controller;

import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import com.example.server.question.mapper.QuestionMapper;
import com.example.server.question.response.MultiResponse;
import com.example.server.question.service.QuestionService;
import com.example.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@Validated
@Transactional
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;


    // 질문 작성 페이지
    @PostMapping("")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {

        Question postquestion = questionMapper.PostToEntity(post);

        Question question = questionService.createQuestion(postquestion);

        URI location = UriCreator.createUri("/questions", question.getId());

        return ResponseEntity.created(location).body("질문 Post 완료");

//        return new ResponseEntity<>(questionMapper.EntityToResponse(question), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity patchQuestion(@Positive @PathVariable("id") long id,
                                        @Valid @RequestBody QuestionDto.Patch patch) {
        patch.setId(id);

        Question question = questionService.updateQuestion(questionMapper.PatchToEntity(patch));

        return new ResponseEntity<>(questionMapper.EntityToResponse(question),HttpStatus.OK);
    }

    @GetMapping("/{id}/{member-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("id") long id,
                                      @Positive @PathVariable("member-id") long memberId) {

        Question question = questionService.findQuestion(id,memberId);

        return new ResponseEntity(questionMapper.EntityToDetailResponse(question),HttpStatus.OK);
    }

    @GetMapping("")
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
