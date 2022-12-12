import { ROUTES, MESSAGE } from '@/components/constants';
import useAuthContext from '@/hooks/auth/useAuthContext';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const handleLogout = () => {
    const logoutConfirmMessage = confirm(MESSAGE.LOGOUT_CONFIRM);

    if (logoutConfirmMessage) {
      dispatch({ type: 'LOGOUT' });
      localStorage.removeItem('user');
      navigate(ROUTES.HOME.PATH);
    }
  };

  return { handleLogout };
};

export default useLogout;
