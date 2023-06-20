package com.example.server.answer.controller;

import com.example.server.answer.dto.AnswerPostDto;
import com.example.server.answer.entity.Answer;
import com.example.server.answer.mapper.AnswerMapper;
import com.example.server.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {

        Answer response = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
