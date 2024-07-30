
# ✉️ 실시간 채팅앱 <br/>

### 💻프로젝트 개요
💬취업준비하던중 Nosql 과 react 를 요구하는 회사들이 많아서 해당기술을 익히기위해서    
 실시간채팅을 할수 있는 간단한 실시간 채팅앱을 제작하게 되었습니다.
- [x] [🍾 역할](#역할)
- [x] [🎯서비스 핵심기능](#서비스-핵심기능)
- [x] [🛠기술 스택](#기술-스택)
- [x] [✨React](#react)
- [x] [✨STOMP](#stomp) 


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


### 🎯서비스 핵심기능
```
>회원가입한 사용자만 이용가능
>채팅방 생성및 삭제가능
>사용자들간 실시간 채팅기능
```
클릭시 유튜브 기술시연 영상   
   
 >#1.[로그인 및 회원가입](https://youtu.be/vDreVqhy6dY)    
 >#2.[카테고리별 제품 조회, main 페이지 제품 추천](https://youtu.be/ZsKDU0IyimI)     
 >#3.[제품 장바구니 및 바로구매](https://youtu.be/KlHED1Shz_o)           
 >#4.[결제한 상품에대한 리뷰작성 및 결제 취소요청](https://youtu.be/o4BEff3XJDE)         
 >#5.[게시글 작성](https://youtu.be/c3nrzZ5vNZc)      
 >#6.[관리자 페이지](https://youtu.be/fKTIbY95Gr8) 


<br/><br/>
### 🛠기술 스택
OS | Windows 10
--- | --- |
Language | ![Java](https://img.shields.io/badge/JAVA-000?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/Spring-000?style=for-the-badge&logo=spring&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-000?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-000?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-000?style=for-the-badge&logo=javascript&logoColor=white) ![react](https://img.shields.io/badge/React-61DAFB?style=for-the-badge)
IDE | ![STS4](https://img.shields.io/badge/STS4-000?style=for-the-badge&logo=spring&logoColor=white) ![intellijidea](https://img.shields.io/badge/Intellij-000?style=for-the-badge&logo=intellijidea&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-000?style=for-the-badge&logo=visualstudiocode&logoColor=white)
Framework | ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) 
Build Tool | ![Static Badge](https://img.shields.io/badge/Gradle-%2302303A?style=for-the-badge)
Database | ![Mysql Database 8](https://img.shields.io/badge/MySql-F80000?style=for-the-badge) ![Mongodb](https://img.shields.io/badge/Mongodb-47A248?style=for-the-badge)
Frontend | ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![reactbootstrap](https://img.shields.io/badge/reactbootstrap-41E0FD?style=for-the-badge&logo=reactbootstrap&logoColor=black)
Version Control | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white) |   

<br/><br/>
### ✨React
Reac학습하기전에 왜 많은 회사들이 react를 요구하는지 react의 특징을 알아보았다. 
react를 사용하기전 웹 동작 방식(SSR)
1. 서버측에서 'VIEW'를 만들어서 받고 브라우저는 받은 'VIEW'를 화면에 그려주는 방식으로 동작을 하였다.   
2. 일단 'VIEW'를 받은뒤, 화면의 부분변경이 필요한 부분을 AJAX요청 하여 받아서 변경하고 JavaScript를 사용하여
   AJAX 요청, 응답받은뒤에이를 기반으로 화면을 변경하는 동작

   하지만...
   'VIEW'가 복잡한 경우 AJAX를 통한 응답, 그리고 이를 기반으로 변경이 복잡해질경우 1번과 마찬가지로 서버에 부하가 많이가
   떄문에 부하분산하기위해 사용하였다.

React 핵심컨셉 (SPA) : 데이터 변경감지 -> UI가 자동 업데이트 되게 하기 (Observer 패턴) react는 데이터 변경을 감지하는 엔진 역할 수행, 계속 작동해야 하는 데몬 프로세스다(Node.js필요) 

따라서 데이터 변경감지를 하기위하여 여러 Hook들을 사용하여 상태 변수들을 관리하였다.      
ex) useState, useRef, useEffect...


### ✨STOMP
  



