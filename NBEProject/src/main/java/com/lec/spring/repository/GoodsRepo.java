package com.lec.spring.repository;



import com.lec.spring.domain.shop.Goods;

import java.util.List;

public interface GoodsRepo {
    List<Goods> selectByCategory(String category1, String category2, int from, int rows);

    List<Goods> getRandomItem();
    Goods selectById(String id);

    long countAll(String category1, String category2);

    int plusViewCnt(Goods goods);

    List<Goods> selectByViewCnt();

}
