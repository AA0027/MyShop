# 🛒NBE 쇼핑몰 (4인 팀 프로젝트) 
이메일 : <whckdtjd456@naver.com>

### 💻프로젝트 개요
💬스프링 부트를 사용하여 고객들이 옷을 구매하고 자신의 코디를 올릴수 있는 쇼핑몰을 기획하여 개발하게됬습니다..
- [x] [🎯서비스 핵심기능](#서비스-핵심기능)
- [x] [🛠기술 스택](#기술-스택)
- [x] [✨기술적 의사결정](#기술적-의사결정)
- [x] [📖ERD](#erd)

<hr>
#### 진행 기간
* 22.2.25 - 22.3.4
<hr>
### 🧙 맴버구성
 - 팀장  : 이윤재 - Payment / Order / Cartegory
 - 팀원1 : 채현우 - Login / Join / Update / 각 페이지 세션 작업
 - 팀원2 : 전성덕 - Main Page
 - 팀원3 : 김창훈 - Notice Page
 - 팀원4 : 김성재 - Detail Page
<hr/>
### 🎯서비스 핵심기능
```
👨‍👨‍👧 회원 : 로그인 | 회원가입 | 소셜 로그인(카카오) 
🏡 마이페이지 : 주문 조회 | 리뷰 등록 | 배송지 목록수정 | 회원정보수정 
💰 상품 : 사용자들이 많이 선택한 제품 확인 | 카테고리별 조회, 장바구니, 바로주문
🚧 계시판 : 1:1문의 등록,수정,삭제 | 글·댓글내용/작성자/첨부파일명/말머리별 게시판 검색 | 작성자/관리자 한정 게시글 조회 | 댓글 및 대댓글 등록,수정,삭제,실시간 알림
📈 관리자페이지 : 가입한 회원 정보확인 | 회원 활성화/비활성화 가능 | 회원 등급 변경가능 | 구매자 주문내역 확인 | 구매자 취소요청 환불처리 | 회원 상품문의 확인 및 답변|
```

<details>
<summary>핵심기능 #1. 카테고리별 제품 조회, main 페이지 제품 추천</summary>

![fuction001](https://github.com/rhjdev/geulbeotmall/assets/95993932/ed48456e-a80e-4fbb-8f4a-36d895d8f0bc)
- [x] `댓글/대댓글/상품출고/배송완료`에 대해 Server to Client로의 단방향 통신이 가능한 Server-Sent Events(SSE) 기반으로 실시간 알림 기능을 제공합니다.
- [x] 각 알림 메시지를 클릭해 해당 게시글 또는 주문상세정보페이지로 이동 및 확인이 가능하며, `메시지 삭제 버튼`을 눌러 더 이상 목록에 노출되지 않도록 제외할 수 있습니다.
- [x] 회원이 `로그아웃한 사이 발생한 이벤트 역시 재로그인 후 알림 목록에서 확인`할 수가 있습니다. 
</details>
<details>
<summary>핵심기능 #2. 제품 장바구니 및 바로구매</summary>

![fuction002](https://github.com/rhjdev/geulbeotmall/assets/95993932/42912cf3-1824-4c99-a6ac-01c9b098fd7b)
- [x] 검색 키워드로서 문자, 숫자 모두 취급해 `상품명, 브랜드명, 주요태그`는 물론 `심두께별 검색`이 가능합니다.
- [x] `Commons Lang3` 통해 파라미터 타입(parameter type)을 동적으로 구분하도록 작성하였습니다.
```xml
WHERE A.PROD_AVAIL_YN = 'Y' <!-- 판매중인 상품에 한하여 검색 -->
  AND (
<choose>
<!-- parameterType 동적 구분 / ASCII 코드 기반 '.' 포함 여부 확인 / 취급 중인 상품의 심두께는 2.0 이하 -->
<when test="@org.apache.commons.lang3.math.NumberUtils@isCreatable(keyword) 
        and @org.apache.commons.lang3.StringUtils@contains(keyword, 46) and keyword lt 2">
        O.OPT_POINT_SIZE LIKE TO_NUMBER(#{ keyword })
</when>
<otherwise>
        A.PROD_NAME LIKE '%' || #{ keyword } || '%'
    OR C.BRAND_NAME LIKE '%' || #{ keyword } || '%'
    OR A.PRODUCT_TAG LIKE '%' || #{ keyword } || '%'
</otherwise>
</choose>
    )
```
</details>
<details>
<summary>핵심기능 #3. 결제한 상품에대한 리뷰작성 및 결제 취소요청</summary>

![fuction003](https://github.com/rhjdev/geulbeotmall/assets/95993932/b1555bac-bccc-4754-a74c-e4ab97a3a53d)
- [x] 색상들을 `Enum` 상수 필드로 정의하고, 각각 `DB 저장에 쓰일 값(value)/사용자 화면에 보일 이름(label)/스타일 적용 용도의 헥스코드(color)`와 같은 데이터를 명시한 후 생성자 통해 호출 및 활용하였습니다.
```java
public enum ProductInkColor {
    BLACK("black", "블랙", "color: #000000;"); //value, label, color
}
```
```html
<th:block th:each="ink : ${T(com.reminder.geulbeotmall.product.model.dto.ProductInkColor).values()}">
    <span class="color-span" th:data-target="${ ink.getLabel() }">
        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" th:title="${ ink.getLabel() }">
            <i class="fa-solid fa-square-full" th:style="${ ink.getColor() }"></i>
        </a>
    </span>
</th:block>
```
</details>
<details>
<summary>핵심기능 #4. 계시글 작성</summary>

![fuction004](https://github.com/rhjdev/geulbeotmall/assets/95993932/aed5de29-cbac-4619-b66c-648153d60b8b)
- [x] 로그인 여부에 상관 없이 접속 이래 현재까지 조회한 상품 목록을 `@SessionAttributes` 어노테이션 통해 세션상에 `recentlyViewed` 이름으로 계속 기록합니다. 이후 로그인하게 되면 회원은 `마이페이지 메인에서 해당 목록을 확인`할 수 있습니다.
- [x] 비로그인 상태에서 담은 장바구니 상품은 마찬가지로 `@SessionAttributes` 어노테이션 통해 세션상에 `geulbeotCart`로서 기록됩니다. 이어서 로그인이 발생할 경우 `회원의 장바구니 목록으로 연동 및 저장`됩니다.
</details>
<details>
<summary>핵심기능 #5. 관리자 페이지</summary>

![fuction005](https://github.com/rhjdev/geulbeotmall/assets/95993932/5ec2b61a-36b8-458e-9ee8-0cd250dc7bb4)
- [x] `JavaMailSender`를 이용해 이메일 인증 및 임시 비밀번호 발송 기능을 구현하였습니다.
- [x] 휘발성 데이터인 이메일 인증 토큰의 경우 인메모리(In-Memory) 형태에 TTL(Time to Live) 특성을 지녀 유효기간이 설정된 `Redis` 기반의 Refresh Token으로 관리합니다. 사용자는 전송된 링크를 눌러 재접속하는 것만으로 이메일 인증을 완료할 수 있습니다.
</details>
<details>
<summary>핵심기능 #6. 소셜 로그인</summary>

- [x] 일반 로그인의 경우 회원가입 양식 작성 후 이메일 인증을 거쳐야 하는 반면, 소셜 로그인한 회원은 `해당 계정에서 불러온 이름 및 이메일 정보가 연동`돼 입력란을 채우며 나아가 별도의 이메일 인증 없이 곧바로 이용이 가능합니다 .
</details>

|<small>회원가입</small>|<small>제품 추천 및 카테고리별 조회<small>|<small>제품 장바구니 및 바로구</small>|
|:-:|:-:|:-:|
|![003](https://github.com/rhjdev/geulbeotmall/assets/95993932/dbb1b387-fb7f-461b-af19-3ec222d1d110)|![004](https://github.com/rhjdev/geulbeotmall/assets/95993932/99faf0a1-0197-4a29-8110-2d89314555a7)|![005](https://github.com/rhjdev/geulbeotmall/assets/95993932/42f13241-98d0-4345-895c-ce2dfc75a968)|
|<small><b>리뷰작성 및 결제취소요청청</b></small>|<small><b>소셜로그인(네이버)</b></small>|<small><b>관리자 페이지</b></small>|
|![006](https://github.com/rhjdev/geulbeotmall/assets/95993932/d3d89f06-1a07-41e2-8d69-83ab172fdff0)|![007](https://github.com/rhjdev/geulbeotmall/assets/95993932/ed538d0d-1f0c-4bf5-8dfd-1543db876983)|![008](https://github.com/rhjdev/geulbeotmall/assets/95993932/82878195-95fc-43a2-ba78-9905f07f1240)|

### 🛠기술 스택
OS | Windows 10
--- | --- |
Language | ![Java](https://img.shields.io/badge/JAVA-000?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/Spring-000?style=for-the-badge&logo=spring&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-000?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-000?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-000?style=for-the-badge&logo=javascript&logoColor=white)
IDE | ![STS4](https://img.shields.io/badge/STS4-000?style=for-the-badge&logo=spring&logoColor=white) ![intellijidea](https://img.shields.io/badge/Intellij-000?style=for-the-badge&logo=intellijidea&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-000?style=for-the-badge&logo=visualstudiocode&logoColor=white)
Framework | ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) ![MyBatis](https://img.shields.io/badge/Mybatis-d40000?style=for-the-badge)
Build Tool | ![Static Badge](https://img.shields.io/badge/Gradle-%2302303A?style=for-the-badge)
Database | ![Mysql Database 8](https://img.shields.io/badge/MySql-F80000?style=for-the-badge)
Frontend | ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
Library | ![Spring Security](https://img.shields.io/badge/spring%20security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white) ![Thymeleaf](https://img.shields.io/badge/thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
API | ![Iamport Payment](https://img.shields.io/badge/Iamport%20Payment-c1272d?style=for-the-badge) ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
Server |![Apache Tomcat 9.0](https://img.shields.io/badge/Apache%20Tomcat%20-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black) ![amazonec2](https://img.shields.io/badge/amazonec2-c1272d?style=for-the-badge&logo=amazonec2&logoColor=white) ![amazonrds](https://img.shields.io/badge/amazonRDS-c1272d?style=for-the-badge&logo=amazonrds&logoColor=white) 
Version Control | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### ✨기술적 의사결정
선택기술 | 선택이유 및 근거
--- | --- |
`RestTemplate` | 제품 구매바로가기와 장바구니 기능에대해 서버에 응답을 요청하여 구매바로가기, 장바구니 담을떄도 있는지 없는지에대한 응답값에 따른 처리를 하기위하여 사
`Cookie` | 제품 상세페이지에서 해당 제품에대해 평소에 display가 none 인 리뷰들을 페이지네이션하였을떄 페이지 이동시 dispaly의 값이 none으로 변경되어 cookie에 리뷰에 담겨있는 div의 속석을 저장하여 페이지이동시에도 리뷰목록 display 속성 유지하고자 함
`SecurityContextHolder` | 서비스 동작시 로그인한 사용자의 정보를 얻고자 사용. SecurityContextHolder에서 Context를 얻은후 Authentication에서 Principle 정보를 얻을수 있다.
`Enum` | 문구 쇼핑몰 특성에 맞춰 _잉크컬러, 바디컬러, 심두께, 태그, 할인율, 상품카테고리, 기본배송메시지, 카드사별 할부혜택내용, 문의게시판 말머리, 실시간 알림 종류_ 등을 **연관된 상수들의 집합인 열거형** `Enum`으로 정의. 각 필드마다 데이터를 배정하고 이를 접근자(getter method) 통해 호출하면서 리팩토링 시 변경 범위를 최소화하였음.
`Commons Lang3` | 상품 전체 검색 시 _StringUtils, NumberUtils_ 등 `Apache Commons Lang3` 클래스에 정의된 메소드 통해 **parameter type을 동적으로 구분 및 처리**하도록 조건별 쿼리문을 최적화하였음.
`Thymeleaf Layout` | _Alert, Modal, ***Pagination***, ***Comment***, Header/Footer,  Dashboard_ 등을 각각 `Fragment`로 구분하여 사이트 전역적으로 사용되는 데 있어 코드 중복을 피하고 추가/수정에 용이하도록 의도하였음.

### 📖ERD
![erd](https://github.com/user-attachments/assets/08fe6d79-9dac-4707-beb5-0231c65c132e)




