package com.lec.spring.domain.shop;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Options {

    private Integer id;
    private Integer item_id;
    private String name;
    private String value;


}
