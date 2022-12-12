import { postSignUp } from '@/apis';
import { MESSAGE } from '@/components/constants';
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
        setError(MESSAGE.USER_ALREADY_EXIST);
      }
    });

    if (response) {
      alert(MESSAGE.SIGNIN_SUCCEED);
      navigate(ROUTES.LOGIN.PATH);
    }
  };

  return { handleSignUp, isLoading, error };
};

export default useSignUp;
