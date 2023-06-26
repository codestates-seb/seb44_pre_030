package com.example.server.question.helper;

import java.net.URI;

public interface QuestionControllerHelper extends ControllerHelper {
    void PostQuestionTest() throws Exception;
    void PatchQuestionTest() throws Exception;
    void GetQuestionTest() throws Exception;
    void ListOfGetQuestionTest() throws Exception;
    void DeleteQuestionTest() throws Exception;

    String DEFAULT_URL = "/questions";
    String RESOURCE_URL = "/{id}";
    String MAIN_URL = "/";

    default URI postUri(){

        return createUri(DEFAULT_URL); }

    default URI patchUri(long resourceId){

        return createUri(DEFAULT_URL + RESOURCE_URL, resourceId);
    }

    default URI getResoueceUri(long resourceId) {

        return createUri(DEFAULT_URL + RESOURCE_URL,resourceId);
    }

    default URI getMainOfListUri(){

        return createUri(MAIN_URL);
    }

    default URI getDeleteUri(long resourceId) {

        return createUri(RESOURCE_URL,resourceId);
    }
}
