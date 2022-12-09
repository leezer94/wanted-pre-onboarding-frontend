const emailValidator = (email: string) => {
  let errorMessage = '';

  if (!email) errorMessage = '이메일을 입력해 주세요.';

  if (!email?.includes('@')) {
    errorMessage = '이메일 형식이 올바르지 않습니다.';
  }

  return errorMessage;
};

export { emailValidator };
