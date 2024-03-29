# 🏁 프로젝트 실행 방법

해당 프로젝트를 로컬에서 실행하고 싶다면 하단의 절차를 따르면 됩니다.

```
$ npm install
$ npm run start
```

현재 리포지토리를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

---

## 배포링크

[링크](https://wanted-pre-onboarding-frontend-tau.vercel.app/)
[https://wanted-pre-onboarding-frontend-tau.vercel.app/]

---

## 숏 에세이 링크

[링크](https://velog.io/@leezer94/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9D%B8%ED%84%B4%EC%8B%AD-%EC%B0%B8%EA%B0%80-%EC%97%90%EC%84%B8%EC%9D%B4-%EC%9D%B4%EA%B1%B4%ED%9D%AC)
[https://velog.io/@leezer94/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9D%B8%ED%84%B4%EC%8B%AD-%EC%B0%B8%EA%B0%80-%EC%97%90%EC%84%B8%EC%9D%B4-%EC%9D%B4%EA%B1%B4%ED%9D%AC]

# 과제

:: 1. 로그인 / 회원가입 / 경로에 로그인 / 회원가입 기능을 개발해주세요

## 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.

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

:: 2. 투두 리스트

## `/todo` 경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요

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
