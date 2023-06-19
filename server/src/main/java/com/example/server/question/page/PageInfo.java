package com.example.server.question.page;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private int getTotalPages;
    private long getTotalElements;
}
