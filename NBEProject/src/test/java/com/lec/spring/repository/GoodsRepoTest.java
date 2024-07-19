package com.lec.spring.repository;

import com.lec.spring.domain.shop.Goods;
import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class GoodsRepoTest {

    @Autowired
    SqlSession sqlSession;
    private GoodsRepo goodsRepo;
    @Test
    public void test(){
        goodsRepo = sqlSession.getMapper(GoodsRepo.class);

        List<Goods> list = goodsRepo.getRandomItem();
        System.out.println(list);
    }
}