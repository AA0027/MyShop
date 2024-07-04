package com.lec.spring.repository;

import com.lec.spring.domain.shop.Authority;

import java.util.List;

public interface AuthorityRepo {
    // 권한 추가
    int insert(Authority authority);
    // 권한 삭제
    int delete(int id);
    // 특정 이름(name) 의 권한 정보 읽어오기
    Authority findByName(String name);

    // 특정 사용자(User) 의 권한(들) 읽어오기
    List<Authority> findByUser(int user_id);

    // 특정 사용자(user_id) 에 권한(auth_id) 추가 (INSERT)
    int addAuthority(Integer user_id, Integer auth_id);

    int updateAuthority(Integer user_id, Integer auth_id);

}
