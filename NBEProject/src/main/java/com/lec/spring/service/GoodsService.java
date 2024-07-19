package com.lec.spring.service;

import com.lec.spring.domain.shop.Goods;
import org.apache.catalina.LifecycleState;
import org.springframework.ui.Model;

import java.util.List;

public interface GoodsService {
    void getProds(String category1, String category2, Integer page, Model model);
    Goods getProd(String id);

    void getReviews(String id, Integer page, Model model);

//    랜덤으로 5개의 옷상품 선택
    List<Goods> getRandomItem();

    void plusViewCnt(Goods goods);

    List<Goods> getTopGoods();

}
