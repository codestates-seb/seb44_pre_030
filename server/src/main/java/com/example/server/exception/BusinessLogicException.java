package com.example.server.exception;

public class BusinessLogicException extends RuntimeException{

    private ErrorResponse errorResponse;

    public BusinessLogicException(ErrorResponse errorResponse){
        super(errorResponse.getErrorStatus());
        this.errorResponse = errorResponse;
    }
}
