package com.lec.spring.domain.shop;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class Post {

    private Integer id;
    private Integer user_id;
    private LocalDateTime regdate;
    private String content;
}
