package com.example.server.question.helper;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public interface ControllerUriHelper {

    String DEFAULT_URL = "/questions";

    default URI createUri(String uri,long resourceId){

        return UriComponentsBuilder
                .newInstance()
                .path(uri + "/{resource-id}")
                .buildAndExpand(resourceId)
                .toUri();
    }
}
