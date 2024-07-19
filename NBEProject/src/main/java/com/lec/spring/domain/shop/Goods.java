package com.lec.spring.domain.shop;

import com.lec.spring.dto.OrderGoods;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Goods {
    private String goods_no;
    private String category_code;
    private String name;
    private String keywords;
    private String maker;
    private String price;
    private String image;
    private String contents;
    private Integer viewCnt;

    public OrderGoods orderGoods(){
        return OrderGoods.builder()
                .goodsNo(this.goods_no)
                .name(this.name)
                .price(this.price)
                .image(this.image)
                .build();
    }
}
