import { postSignIn } from '@/apis';
import ROUTES from '@/components/constants/routes';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '@/hooks/auth/useAuthContext';
import { MESSAGE } from '@/components/constants';

const useSignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useAuthContext();

  const handleSignIn = async (
    e: FormEvent<HTMLFormElement>,
    userInfo: UserInfo,
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const response = await postSignIn(userInfo).catch(({ response }) => {
      if (response?.status === 401) {
        setIsLoading(false);
        setError(MESSAGE.USER_NOT_MATCH);
        return;
      }
      if (response?.status === 404) {
        setIsLoading(false);
        setError(MESSAGE.USER_NOT_FOUND);
        return;
      }
    });

    if (response?.status === 200) {
      dispatch({ type: 'LOGIN', payload: userInfo.email });

      alert(MESSAGE.LOGIN_SUCCEED);
      navigate(ROUTES.TODO.PATH);

      setIsLoading(false);
    }
  };

  return { handleSignIn, isLoading, error };
};

export default useSignIn;
