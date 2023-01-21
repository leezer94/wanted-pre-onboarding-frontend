import { MESSAGE } from '@/constants';

const emailValidator = (email: string) => {
  let errorMessage = '';

  if (email.length === 0) return errorMessage;

  if (!email) errorMessage = MESSAGE.EMAIL_INPUT_EMPTY;

  if (!email?.includes('@')) {
    errorMessage = MESSAGE.EMAIL_AT_NEEDED;
  }

  return errorMessage;
};

const passwordValidator = (password: string) => {
  let errorMessage = '';

  if (password.length === 0) return errorMessage;

  if (!password) errorMessage = MESSAGE.PASSWORD_INPUT_EMPTY;

  if (password.length < 8) {
    errorMessage = MESSAGE.PASSWORD_LENGTH;
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
