package com.example.server.question.like.controller;

import com.example.server.question.entity.Question;
import com.example.server.question.mapper.QuestionMapper;
import com.example.server.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/questions")
public class additionalController {

    final private QuestionService questionService;
    final private QuestionMapper questionMapper;

    public additionalController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PatchMapping("/like/{question-id}")
    public ResponseEntity likeApi(@Positive @PathVariable("question-id") long questionId){

        Question question = questionService.countLike(questionId);

        return new ResponseEntity(questionMapper.EntityToResponse(question), HttpStatus.OK);
    }

    @PatchMapping("/unlike/{question-id}/{member-id}")
    public ResponseEntity unlikeApi(){

        return null;
    }

}
