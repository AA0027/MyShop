package com.lec.spring.repository;

import com.lec.spring.domain.shop.Post;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PostRepo {
    int save(Post post);
    Post findById(Integer id);
    List<Post> findAll();
    int update(Post post);
    int delete(Post post);
    List<Post> selectRow(int from, int rows);
    int countAll();
    List<Post> collectPostsByUser(@Param("user_id") Integer user_id);
}
