
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=StudyNote&fontSize=70" />

# <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> 개인 블로그 📝

><b>사이트 이동</b> : <a href="https://eogks0218.github.io/DH_StudyNote">💁‍♂️ DH's Study Note</a>

## 📌목차

▪ [📂 프로젝트 구성](#프로젝트-구성)  
▪ [📺 페이지 설명](#페이지-설명)  
▪ [✔ 샘플데이터 사용 이유](#샘플데이터-사용-이유)  
▪ [😱 문제점](#문제점)  
▪ [💡 해결방안](#해결방안)  




## 📂프로젝트 구성

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/6e9edd89-cbb6-4681-bed0-07c678592746" />

<div align="right">
  
[목차로](#목차)

</div>


##  📺페이지 설명

### `Main`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/28e85063-cad4-45a5-8796-2ef0b74a5fd1" width="350px" height="300px"/>
<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/b5602429-f892-48cf-a82f-9b88e9b4ee2d" width="350px" height="300px"/>
<br />

<ul>
  <li>메인 페이지</li>
  <li>메뉴 버튼 토글로 on/off</li>
  <li>각 메뉴로 이동 가능</li>
</ul>


### `PostList`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/efc3ce85-c60c-40bd-a90f-42396a4de4db" width="250px" height="200px"/>
<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/24c946fc-dcd3-42db-84f4-f21b59ab935f" width="250px" height="200px"/>
<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/012d1167-0ba1-49d7-986b-9289fe6ccee6" width="250px" height="200px"/>

<br />

<ul>
  <li>포스트 페이지</li>
  <li>게시물이 일정 갯수 이상일 시 페이지 구현</li>
  <li>게시물에 마우스 올릴 시 작성자, 작성일, 태그 표시</li>
  <li>일정 이상 스크롤 다운 시 Footer 출현</li>
</ul>


### `Login`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/7aa90a1f-169c-48b2-be89-d3c3ac3ebaa5" width="350px" />
<br />

<ul>
  <li>로그인 페이지</li>
</ul>


### `Item`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/44e885fa-0377-4bb9-9d5e-981e687dda31" width="350px" />
<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/1dc5cca1-92fb-4038-8464-02b2783dc453" width="350px" />
<br />

<ul>
  <li>아이템 페이지</li>
  <li>게시물에 마우스 올릴 시 내용 표시</li>
  <li>작성자의 정보와 로그인한 유저의 정보가 같을 시 수정 버튼 출력</li>
</ul>


### `My Page`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/6e9f2e58-8a45-4e88-9e24-1076dcb25f5a" width="350px" />
<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/f787bef2-e8d9-4a1f-bfc9-7f78d4858e05" width="350px" />
<br />

<ul>
  <li>마이 페이지</li>
  <li>아이디를 제외한 정보 수정 가능</li>
</ul>


### `My Post`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/9c68fef3-d1ca-4703-b059-d536b6f840ba" width="350px" />
<br />

<ul>
  <li>마이포스트 페이지</li>
  <li>로그인 유저가 작성한 글 확인 가능</li>
</ul>


### `Write`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/f941ccf9-048a-46f6-a6e7-6411b1dfc48a" width="350px" />
<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/49b7932d-c0ed-4d43-9601-e3f3df605aab" width="350px" />
<br />

<ul>
  <li>글 작성, 수정 페이지</li>
  <li>아이템 페이지에서 수정으로 들어올 시 기존 내용 출력</li>
</ul>


### `SideBar & Header`

<img src="https://github.com/eogks0218/DH_StudyNote/assets/160206306/c6f9c72b-3dd7-4c06-aa2f-5af92bf9dba3" width="350px" />
<br />

<ul>
  <li>사이드 바 및 헤더</li>
  <li>선택한 메뉴에 따라 색상 변경</li>
</ul>

<div align="right">
  
[목차로](#목차)

</div>



## ✔샘플데이터 사용 이유
  
### `정적 페이지만 배포하는 github page에서 구현 불가능`

<ol>
  <li>
    아마존 서버 등 외부 서버 연결 후 구현하기. ❌
    <ul>
      <li>상업용 페이지가 아니라 내가 할 수 있다는 것을 보여줄 뿐</li>
    </ul>
  </li>
  <li>제이슨 파일로 샘플 데이터 생성 후 리덕스에서 정보 관리 ⭕</li>
</ol>


<div align="right">
  
[목차로](#목차)

</div>


## 😱문제점

### `회원가입`

<ul>
  <li>미구현</li>
</ul>
  

### `댓글, 뷰, 좋아요 기능`

<ul>
  <li>미구현</li>
</ul>
  

### `짧은 글만 등록 가능`

<ul>
  <li>긴 글 등록 시 유연하지 않은 아이템페이지 UI</li>
</ul>


<div align="right">
  
[목차로](#목차)

</div>


## 💡해결방안

### `회원가입`

<ul>
  <li>개인 공부용 블로그로 생각하고 만드느라 미구현</li>
  <li>다음에는 댓글, 뷰, 좋아요 기능을 위해 만드는 것 추천</li>
</ul>
  
### `댓글, 뷰, 좋아요 기능`

<ul>
  <li>아이템 페이지에 카운트 추가하여 뷰 데이터 업데이트</li>
  <li>좋아요 버튼 추가 후 좋아요 데이터 업데이트</li>
  <li>데이터에 parent_post 등 coloum 추가하고 구현 가능</li>
</ul>

  
### `짧은 글만 등록 가능`

<ul>
  <li>고정형 Height나 Width는 이왕이면 지양하기</li>
</ul>

<div align="right">
  
[목차로](#목차)

</div>



<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer" />
