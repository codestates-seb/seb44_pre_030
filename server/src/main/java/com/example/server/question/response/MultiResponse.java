package com.example.server.question.response;

import com.example.server.question.page.PageInfo;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.xml.crypto.Data;
import java.util.List;

@Getter
public class MultiResponse<T> {
    private List<T> data;
    private PageInfo pageInfo;
    public MultiResponse(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = PageInfo.builder()
                .page(page.getNumber() + 1)
                .size(page.getSize())
                .getTotalPages(page.getTotalPages())
                .getTotalElements(page.getTotalElements())
                .build();
    }
}
