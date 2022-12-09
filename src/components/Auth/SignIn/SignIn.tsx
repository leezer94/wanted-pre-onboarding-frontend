import ShadowButton from '@/components/@commons/Button/ShadowButton';
import useSignIn from '@/hooks/useSIgnIn';
import { useState } from 'react';
import * as S from '../Auth.style';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn, error } = useSignIn();

  return (
    <S.AuthForm onSubmit={(e) => handleSignIn(e, { email, password })}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        placeholder='이메일을 입력해 주세요'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='off'
      />
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
      <S.Border />
      <ShadowButton type='submit' content='로그인' />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.AuthForm>
  );
};

export default SignInForm;
