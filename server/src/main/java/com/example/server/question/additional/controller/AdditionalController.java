package com.example.server.question.additional.controller;

import com.example.server.question.additional.service.AdditionalService;
import com.example.server.question.entity.Question;
import com.example.server.question.mapper.QuestionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RestController
@Transactional
@Validated
@RequestMapping("/questions")
@RequiredArgsConstructor
public class AdditionalController {

    private final AdditionalService additionalService;
    private final QuestionMapper questionMapper;

    @PatchMapping("/like/{question-id}/{member-id}")
    public ResponseEntity likeApi(@Positive @PathVariable("question-id") long questionId,
                                  @Positive @PathVariable("member-id") long memberId){

        Question question = additionalService.countLike(questionId,memberId);

        return new ResponseEntity(questionMapper.EntityToResponse(question), HttpStatus.OK);
    }

    @PatchMapping("/unlike/{question-id}/{member-id}")
    public ResponseEntity unlikeApi(@Positive @PathVariable("question-id") long questionId,
                                    @Positive @PathVariable("member-id") long memberId){

        Question question = additionalService.unCountLike(questionId,memberId);

        return new ResponseEntity(questionMapper.EntityToResponse(question), HttpStatus.OK);
    }

}
