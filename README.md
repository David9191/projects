# 💻 테크메이트


## 프로젝트 주제

```
1. MZ세대의 1인가구를 겨냥한 렌탈쇼핑몰입니다.
2. 사회초년생인 경우가 많은 MZ에게 경제적 부담을 덜어줍니다.
3. 디자인 뿐만 아니라 합리적 가격도 같이 지닌 상품만을 취급합니다.
```

## 팀 소개

### **팀명 : 테크메이트 (techmate)**

1. 우리는 가전제품을 제공합니다.
2. 렌탈서비스로 MZ세대의 부담을 덜어주고
3. 짧은 주기로 상품을 변경할 수 있도록 해
4. 트렌트에 민감한 MZ세대의 욕구를 충족시킵니다.

### 구성원 / 역할

|  이름  |   파트   | 담당 업무                                                                                                                                                            |
| :----: | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 임지성 | Front-End | 👑팀장, 전체적인 레이아웃, 메인페이지 베너, 오늘의 추천상품, 헤더 디자인, 장바구니, 주문/결제, 주문 완료 페이지 레이아웃 & 기능 구현 |
| 김승섭 | Front-End | 💻 메인페이지 헤더 및 메인 카테고리, 카테고리 페이지, 사용자 정보 조회, 주문 조회 페이지 |
| 송현수 | Front-End | 💻 사용자 상품 페이지, 회원가입, 로그인 페이지, 메인페이지 푸터 레이아웃 및 기능 구현 |
| 이민우 | Back-End | 🔊발표, JWT 토큰, 회원 확인, 사용자 권한 확인, 로그인 및 회원가입 등을 포함한 전반적인 사용자 관련 기능|
| 이해인 | Back-End | 💻 사용자 카테고리·상품·주문 조회, 주문/결제, 관리자 카테고리·상품·주문정보 수정 및 삭제, 이메일 중복 체크 |

### 폴더 구조

```
techmate
├── src   
│   ├── db
│   │   ├── modles
│   │   ├── schemas
│   │   └── index.js
│   ├── middlewares
│   │   └── index.js
│   ├── routers
│   │   └── index.js
│   ├── services
│   ├── views
│   │   ├── cartPage
│   │   ├── cateforyPage
│   │   ├── commonCss
│   │   ├── commonImage
│   │   ├── eventComponent
│   │   ├── footerComponent
│   │   ├── headerComponent
│   │   ├── itemDetail
│   │   ├── loginPage
│   │   ├── mainPage
│   │   ├── myPage
│   │   ├── orderCheckPage
│   │   ├── orderCompletedPage
│   │   ├── orderPage
│   │   ├── registerPage
│   └── └── webStorage
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── babel.config.json
├── package-lock.json
├── package.json
├── README.md
└── server.js

```

## 페르소나

```
이름 : 나엠지
나이 : 20대 ~ 30대
직업 : 신입개발자
- 서울에 거주하고 있고 집순(돌)이 이다.
- 넷플릭스, 게임을 좋아하고 예쁜 것과 가성비를 중요하게 생각한다.
```

## 서비스 소개

https://www.notion.so/elice/fc6a647167cf46839b98bd9866ce50af
<br>

## API 명세

### 🖥️ Server : 34.22.85.74:3000

1. npm install

### API 명세

https://www.notion.so/elice/API-681cf1e4292440169f28484dcd528d0b
<br>

## 사용 기술 스택

**Front - End**

- HTML
- CSS
- JavaScript

**Back - End**

- Node.js
- Express.js
- MongoDB & Mongoose

## 코드 컨벤션

1. Airbnb ESLint, prettier 설정을 따른다.
2. Class는 대문자로 시작하는 Upper Camel Case를 사용한다.
3. 일반 변수명은 소문자로 시작하는 Lower Camel Case로 통일한다.
4. 백엔드는 3계층 구조로 설계한다. (Router, Service, Model)

## Branch 구조

```
                 frontend - feature#FE
                /
master -----dev
                 \
                 backend - feature#BE
```

## 기타 사항
**[techmate/config/.env 설정]**<br>
PORT<br>
SECRET_KEY<br>
JWT_SECRET_KEY<br>
DB_URL<br>
<br>

**[사이트 테스트 계정]**<br>
login = elice@elice.io<br>
password = elice1234<br>
<br>
