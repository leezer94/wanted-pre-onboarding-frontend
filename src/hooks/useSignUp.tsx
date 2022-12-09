import { postSignUp } from '@/apis';
import ROUTES from '@/components/constants/routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSignUp = async (e: any, userInfo: UserInfo) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const response = await postSignUp(userInfo).catch(({ response }) => {
      if (response.status === 400) {
        setIsLoading(false);
        setError('이미 존재하는 회원입니다.');
      }
    });

    if (response?.status === 201) {
      alert('회원가입이 완료되었습니다.');
      navigate(ROUTES.LOGIN.PATH);
    }
  };

  return { handleSignUp, isLoading, error };
};

export default useSignUp;
