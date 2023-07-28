package com.example.server.question.helper;

import com.example.server.question.entity.Question;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public interface ControllerHelper {

    default RequestBuilder postBuilder(URI uri,String content){

        return MockMvcRequestBuilders
                .post(uri)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
    }

    default RequestBuilder patchBuilder(URI uri,String content){

        return MockMvcRequestBuilders
                .patch(uri)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
    }

    default RequestBuilder getBuilder(URI uri){

        return MockMvcRequestBuilders
                .get(uri)
                .accept(MediaType.APPLICATION_JSON);
    }

    default RequestBuilder getListOfMainPageBuilder(URI uri, MultiValueMap<String,String> params){

        return MockMvcRequestBuilders
                .get(uri)
                .params(params)
                .accept(MediaType.APPLICATION_JSON);
    }

    default RequestBuilder deleteBuilder(URI uri){

        return MockMvcRequestBuilders
                .delete(uri);
    }

    default URI createUri(String url){
        return UriComponentsBuilder
                .newInstance()
                .path(url)
                .build()
                .toUri();
    }

    default URI createUri(String url,long resourceId){
        return UriComponentsBuilder
                .newInstance()
                .path(url)
                .buildAndExpand(resourceId)
                .toUri();
    }

    default URI createUri(String url,long resourceId,long memberId){
        return UriComponentsBuilder
                .newInstance()
                .path(url)
                .buildAndExpand(resourceId,memberId)
                .toUri();
    }

}
