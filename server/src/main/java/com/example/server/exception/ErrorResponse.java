package com.example.server.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum ErrorResponse {

    QUESTION_NOT_FOUND(HttpStatus.NOT_FOUND,"질문을 찾을 수 없습니다.");

    private HttpStatus errorCode;
    @Getter
    private String errorStatus;

    ErrorResponse(HttpStatus errorCode, String errorStatus) {
        this.errorCode = errorCode;
        this.errorStatus = errorStatus;
    }
}
