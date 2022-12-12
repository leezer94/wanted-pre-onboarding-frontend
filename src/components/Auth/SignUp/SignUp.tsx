import ShadowButton from '@/components/@commons/Button/ShadowButton';
import {
  emailValidator,
  formValidator,
  passwordValidator,
} from '@/components/@helper/utils/validator';
import useSignUp from '@/hooks/auth/useSignUp';
import { useState } from 'react';
import * as S from '../Auth.style';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignUp, error } = useSignUp();

  return (
    <S.AuthForm onSubmit={(e) => handleSignUp(e, { email, password })}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        placeholder='이메일을 입력해 주세요'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='off'
      />
      <S.InputErrorMessage>{emailValidator(email)}</S.InputErrorMessage>

      <S.Border />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        minLength={8}
        placeholder='비밀번호를 입력해 주세요'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='off'
      />
      <S.InputErrorMessage>{passwordValidator(password)}</S.InputErrorMessage>

      <S.Border />
      <ShadowButton
        type='submit'
        content='회원가입'
        disabled={formValidator(email, password) ? false : true}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.AuthForm>
  );
};

export default SignUpForm;
