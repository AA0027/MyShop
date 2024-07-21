# 🛒NBE 쇼핑몰 (4인 팀 프로젝트) 
이메일 : <whckdtjd456@naver.com>

### 💻프로젝트 개요
💬스프링 부트를 사용하여 고객들이 옷을 구매하고 자신의 코디를 올릴수 있는 쇼핑몰을 기획하여 개발하게됬습니다..
- [x] [🎯서비스 핵심기능](#서비스-핵심기능)
- [x] [🛠기술 스택](#기술-스택)
- [x] [✨기술적 의사결정](#기술적-의사결정)
- [x] [📖ERD](#erd)
- [x] [🧙맴버 구성](#멤버-구성)


<hr/>


### 진행 기간
* 24.6.13 - 24.7.2
<hr/>

### 🧙맴버 구성
 - 팀장  : 진민장 - 계시글 기능, 마이페이지, 배송지 관리기능
 - 팀원1 : 조창성 - erd 설계, 장바구니, 구매, 결제 및 결제취소 기능 구현, 제품 관련 기능 구현
 - 팀원2 : 한승욱 - 관리자 페이지 기능 구현
 - 팀원3 : 이가영 - 리뷰작성기능 구현 및 css 작업
 - 팀원4 : 신성태 - 회원가입 및 로그인(네이버 Oauth) 구현

 
<hr/>


### 🎯서비스 핵심기능
```
👨‍👨‍👧 회원 : 로그인 | 회원가입 | 소셜 로그인(카카오) 
🏡 마이페이지 : 주문 조회 | 리뷰 등록 | 배송지 목록수정 | 회원정보수정 
💰 상품 : 사용자들이 많이 선택한 제품 확인 | 카테고리별 조회, 장바구니, 바로주문
🚧 계시판 : 1:1문의 등록,수정,삭제 | 글·댓글내용/작성자/첨부파일명/말머리별 게시판 검색 | 작성자/관리자 한정 게시글 조회 | 댓글 및 대댓글 등록,수정,삭제,실시간 알림
📈 관리자페이지 : 가입한 회원 정보확인 | 회원 활성화/비활성화 가능 | 회원 등급 변경가능 | 구매자 주문내역 확인 | 구매자 취소요청 환불처리 | 회원 상품문의 확인 및 답변|
```

 #1. 카테고리별 제품 조회, main 페이지 제품 추천

 #2. 제품 장바구니 및 바로구매

 #3. 결제한 상품에대한 리뷰작성 및 결제 취소요청

 #4. 계시글 작성

 #6. 소셜 로그인


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
`ajax` | 문구 쇼핑몰 특성에 맞춰 _잉크컬러, 바디컬러, 심두께, 태그, 할인율, 상품카테고리, 기본배송메시지, 카드사별 할부혜택내용, 문의게시판 말머리, 실시간 알림 종류_ 등을 **연관된 상수들의 집합인 열거형** `Enum`으로 정의. 각 필드마다 데이터를 배정하고 이를 접근자(getter method) 통해 호출하면서 리팩토링 시 변경 범위를 최소화하였음.
`RestTemplate` | 상품 전체 검색 시 _StringUtils, NumberUtils_ 등 `Apache Commons Lang3` 클래스에 정의된 메소드 통해 **parameter type을 동적으로 구분 및 처리**하도록 조건별 쿼리문을 최적화하였음.


### 📖ERD
![erd](https://github.com/user-attachments/assets/08fe6d79-9dac-4707-beb5-0231c65c132e)


###  배포





