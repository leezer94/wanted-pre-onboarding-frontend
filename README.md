# Table of Content

- [프로젝트 실행 방법](#프로젝트-실행-방법)
- [배포링크](#배포링크)
- [숏 에세이 링크](#숏-에세이-링크)
- [과제](#과제)
  - [Assignment1](#assignment1)
  - [Assignment2](#assignment2)
  - [Assignment3](#assignment3)
- [투두 리스트](#투두-리스트)
  - [Assignment4](#assignment4)
  - [Assignment5](#assignment5)
- [디렉토리 구조](#디렉토리-구조)
- [기능 관련](#기능-관련)
  - [상태관리](#상태관리)
  - [로그인](#로그인) 
  - [라우팅](#라우팅)

---

# 프로젝트 실행 방법

해당 프로젝트를 로컬에서 실행하고 싶다면 하단의 절차를 따르면 됩니다.

```
$ npm install
$ npm run start
```

---

## 배포링크

[링크](https://wanted-pre-onboarding-frontend-tau.vercel.app/)

---

## 숏 에세이 링크

[링크](https://velog.io/@leezer94/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9D%B8%ED%84%B4%EC%8B%AD-%EC%B0%B8%EA%B0%80-%EC%97%90%EC%84%B8%EC%9D%B4-%EC%9D%B4%EA%B1%B4%ED%9D%AC)

# 과제

## 로그인 / 회원가입 / 경로에 로그인 / 회원가입 기능 개발

### Assignment1

- [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
- [x] 이메일 조건: @ 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
- [x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

### Assignment2

- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
- [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
- [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

### Assignment3

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
- [x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
- [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

---

## 투두 리스트

### Assignment4

- [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이
      새로운 투두 리스트로 추가되도록 해주세요

---

### Assignment5

- [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
- [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
- [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
- [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

---

# 디렉토리 구조

```
📦src
 ┣ 📂@types
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂@commons // 공통으로 사용되는 컴포넌트
 ┃ ┣ 📂@helper // Private / Public 라우터 관련 인증된 사용자만 접근할 수 있는 라우터 보관
 ┃ ┣ 📂Auth
 ┃ ┗ 📂Todos
 ┣ 📂context // Authentication 관련 Provider를 보관
 ┣ 📂hooks
 ┃ ┗ 📂auth // Auth 관련 비즈니스 로직을 hooks로 분리
 ┣ 📂constants // 상수를 모아서 관리합니다.
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┣ 📂Login
 ┃ ┗ 📂Todo
 ┃ ┣ index.tsx // useRoutes 훅을 이용 routes 을 트리구조로 관리합니다.
 ┣ 📂styles
```

| 폴더      | 용도                                                                       |
| --------- | -------------------------------------------------------------------------- |
| api       | REST API 통신을 위한 최소한의 비지니스 로직을 담고있는 axios를 사용한 코드 |
| @commons  | 공통 컴포넌트를 모아놓고, @를 붙여 최상단에 위치                           |
| @helper   | 헬퍼용도의 컴포넌트를 분리                                                 |
| context   | context Api 를 이용한 Provider                                             |
| hooks     | 비지니스 로직을 hooks 에 분리                                              |
| constants | 상수를 관심사에 따라 분리                                                  |
| styles    | styled-component 관련 로직                                                 |

---
# 기능 관련

## 상태관리

- 앱의 규모가 작은 Todo App 이기 때문에 따로 상태관리 라이브러리 없이 Context Api 로 AuthProvider 를 제공해주는 방식으로 구현을 했습니다.
- 상태의 전달 / 끌어올리기가 필요한 Todo 컴포넌트에는 하위 컴포넌트로의 depth 최대 2 정도로 낮았기 때문에 props 로 넘겨주는 방식을 채택했습니다.

## 로그인

- AuthProvider 를 index.tsx 파일의 APP 컴포넌트 상위에 배치해 APP 컴포넌트의 상위에서 앱 시작 시점 이점에 평가 될 수 있도록 했습니다.
- 토큰은 과제 요구사항에 맞게 로컬스토리지에 관리되며 로그아웃기에 관련 정보를 로컬스토리지에 삭제합니다.
- useSignUp / useSignIn hook 을 구현해 내부에서 응답 상태코드에 따른 에러를 핸들링합니다.
- 아쉬웠던 점은 api 선언부에서 토큰이 필요한 요청은 header 에 Authorization 에 토큰을 모두 넘겨주고 있는데 axios 의 intercepter 기능을 사용해서 분리 할 수 있었다고 생각합니다.

```jsx
import setAuthToken from '@/components/@helper/utils/setAuthToken';
import { createContext, PropsWithChildren, useReducer, useEffect } from 'react';

export const AuthContext = createContext<any>(null);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user === null) return;
    const token = JSON.parse(user).token;

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
```

## 라우팅

- react-router-dom 의 useRoutes hook 을 이용 pages 폴더의 index.tsx 파일에서 트리구조로 관리 됩니다.

- Private / Public Router 컴포넌트를 구현해 로컬스토리지의 토큰을 기반으로 로그인 / 비로그인 유저의 페이지 접근을 관리했습니다.

```jsx
const PAGES: Route[] = [
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO.PATH,
        name: ROUTES.TODO.NAME,
        element: <Todo />,
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
      {
        path: ROUTES.LOGIN.PATH,
        name: ROUTES.LOGIN.NAME,
        element: <Login />,
      },
      {
        path: ROUTES.SIGN_UP.PATH,
        name: ROUTES.SIGN_UP.NAME,
        element: <SignUp />,
      },
      {
        path: ROUTES.HOME.PATH,
        name: ROUTES.HOME.NAME,
        element: <Home />,
      },
    ],
  },
];
```




