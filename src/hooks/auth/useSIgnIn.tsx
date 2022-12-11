import { postSignIn } from '@/apis';
import ROUTES from '@/components/constants/routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '@/hooks/auth/useAuthContext';

const useSignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useAuthContext();

  const handleSignIn = async (e: any, userInfo: UserInfo) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const response = await postSignIn(userInfo).catch(({ response }) => {
      if (response?.status === 401) {
        setIsLoading(false);
        setError('회원정보가 올바르지 않습니다.');
      }
      if (response?.status === 404) {
        setIsLoading(false);
        setError('존재하지 않는 회원정보 입니다.');
      }
    });

    if (response?.status === 200) {
      dispatch({ type: 'LOGIN', payload: userInfo.email });

      alert('성공적으로 로그인이 완료되었습니다.');
      navigate(ROUTES.TODO.PATH);

      setIsLoading(false);
    }
  };

  return { handleSignIn, isLoading, error };
};

export default useSignIn;