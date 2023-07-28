package com.example.server.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum ErrorResponse {

    QUESTION_NOT_FOUND(HttpStatus.NOT_FOUND,"질문정보를 찾을 수 없습니다."),
    QUESTION_EXIST(HttpStatus.CONFLICT, "중복된 질문 id가 존재합니다."),
    MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND,"회원정보를 찾을 수 없습니다."),
    ANSWER_NOT_FOUND(HttpStatus.NOT_FOUND,"answer 정보를 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(HttpStatus.NOT_FOUND,"comment 정보를 찾을 수 없습니다.");

    private HttpStatus errorCode;
    @Getter
    private String errorStatus;

    ErrorResponse(HttpStatus errorCode, String errorStatus) {
        this.errorCode = errorCode;
        this.errorStatus = errorStatus;
    }
}
