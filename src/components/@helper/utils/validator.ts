const emailValidator = (email: string) => {
  let errorMessage = '';

  if (!email) errorMessage = '이메일을 입력해 주세요.';

  if (!email?.includes('@')) {
    errorMessage = '이메일 @ 이 포함되지 않았습니다.';
  }

  return errorMessage;
};

const passwordValidator = (password: string) => {
  let errorMessage = '';

  if (!password) errorMessage = '패스워드를 입력해 주세요.';

  if (password.length < 8) {
    errorMessage = '패스워드는 8자 이상이어야 합니다.';
  }

  return errorMessage;
};

const formValidator = (email: string, password: string) => {
  let isValid = false;

  if (!emailValidator(email) && !passwordValidator(password)) {
    isValid = true;
  }

  return isValid;
};

export { emailValidator, passwordValidator, formValidator };
