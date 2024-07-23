# 🛒NBE 쇼핑몰 (4인 팀 프로젝트) 
<br/>

### 💻프로젝트 개요
💬스프링 부트를 사용하여 고객들이 옷을 구매하고 자신의 코디를 올릴수 있는 쇼핑몰을 기획하여 개발하게됬습니다..
- [x] [🍾 역할](#역할)
- [x] [💹페이지 순서도](#페이지-순서도)
- [x] [🎯서비스 핵심기능](#서비스-핵심기능)
- [x] [🛠기술 스택](#기술-스택)
- [x] [✨기술적 의사결정](#기술적-의사결정)
- [x] [📖ERD](#erd)


<br/><br/><br/>
<hr/>

### 🍾역할 
-  erd 설계  
-  RestTemplate으로 외부의 API를 사용하여 데이터 수집  
-  상품 상세 페이지 및 카테고리 구현   
-  AJAX를 사용한 결제 및 취소 요청 구현   
-  AWS서버에 배포를위한 자동화 스크립트 작성     
-  기능 통합시 발생한 에러 해결     
 <br/><br/><br/>
<hr/>

### 💹페이지 순서도
![페이지순서도](https://github.com/user-attachments/assets/05dfeb39-5935-45fa-b3e0-e9313f329316)   
<br/><br/><br/>

<img src="https://github.com/AA0027/MyShop/issues/2#issue-2422963759"/> 

### 🎯서비스 핵심기능
```
👨‍👨‍👧 회원 : 로그인 | 회원가입 | 소셜 로그인(네이버) 
🏡 마이페이지 : 주문 조회 | 리뷰 등록 | 배송지 목록수정 | 회원정보수정 
💰 상품 : 사용자들이 많이 선택한 제품 확인 | 카테고리별 조회, 장바구니, 바로주문
🚧 계시판 : 1:1문의 등록,수정,삭제 | 글·댓글내용/작성자/첨부파일명/말머리별 게시판 검색 | 작성자/관리자 한정 게시글 조회 | 댓글 및 대댓글 등록,수정,삭제,실시간 알림
📈 관리자페이지 : 가입한 회원 정보확인 | 회원 활성화/비활성화 가능 | 회원 등급 변경가능 | 구매자 주문내역 확인 | 구매자 취소요청 환불처리 | 회원 상품문의 확인 및 답변|
```
클릭시 유튜브 기술시연 영상   
   
 #1. [![로그인 및 회원가입]](https://youtu.be/vDreVqhy6dY{:target="_blank"})   
 #2. [!카테고리별 제품 조회, main 페이지 제품 추천](https://youtu.be/ZsKDU0IyimI){:target="_blank"}      
 #3. [!제품 장바구니 및 바로구매](https://youtu.be/KlHED1Shz_o){:target="_blank"}      
 #4. [!결제한 상품에대한 리뷰작성 및 결제 취소요청](https://youtu.be/o4BEff3XJDE){:target="_blank"}         
 #5. [!게시글 작성](https://youtu.be/c3nrzZ5vNZc){:target="_blank"}      
 #6. [!관리자 페이지](https://youtu.be/fKTIbY95Gr8){:target="_blank"}  


<br/><br/>
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
<br/><br/>
### ✨기술적 의사결정
선택기술 | 선택이유 및 근거
--- | --- |
`RestTemplate` | 제품 구매바로가기와 장바구니 기능에대해 서버에 응답을 요청하여 구매바로가기, 장바구니 담을떄도 있는지 없는지에대한 응답값에 따른 처리를 하기위하여 사용
`Cookie` | 제품 상세페이지에서 해당 제품에대해 평소에 display가 none 인 리뷰들을 페이지네이션하였을떄 페이지 이동시 dispaly의 값이 none으로 변경되어 cookie에 리뷰에 담겨있는 div의 속석을 저장하여 페이지이동시에도 리뷰목록 display 속성 유지하고자 함
`SecurityContextHolder` | 서비스 동작시 로그인한 사용자의 정보를 얻고자 사용. SecurityContextHolder에서 Context를 얻은후 Authentication에서 Principle 정보를 얻을수 있다.
`ajax` | 사용 결제 요청시 사용자 정보 및 상품정보를 서버에 전달하기 위하여 ajax 를 사용함.
`RestTemplate` | API를 사용하여 의류상품들의 정보를 얻거나 결제, 취소요청 등을 하기위하여 사용함.
`AWS EC2` | 프로젝트 배포실습을위하여 무료로 사용할수 있는 EC2 서버에 자동화 배포 스크립트 작성하여 팀원들이 언제든지 기능 테스트를 사용하기위하여 사용함.
`AWS RDS` | EC2 서버에 연결할 DB 저버를 사용하기위하여 AWS 에서 제공하는 RDS 사용함

### 📖ERD
![erd](https://github.com/user-attachments/assets/f7eb54b5-6c95-43a7-b6e5-dac550953999)





