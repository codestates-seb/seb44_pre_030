package com.example.server.answer.controller;

import com.example.server.answer.dto.AnswerPatchDto;
import com.example.server.answer.dto.AnswerPostDto;
import com.example.server.answer.dto.AnswerResponseDto;
import com.example.server.answer.entity.Answer;
import com.example.server.answer.mapper.AnswerMapper;
import com.example.server.answer.service.AnswerService;
import com.example.server.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.net.URI;

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
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        URI location = UriCreator.createUri("/answers", answer.getId());
        // Answer createdAnswer = answerService.findAnswer(answer.getId());
        // return new ResponseEntity(mapper.answerToAnswerResponseDto(createdAnswer), HttpStatus.CREATED);
        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                     @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        System.out.println(answer.getContent());

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity cancelAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.cancelAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
