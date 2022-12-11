import ROUTES from '@/components/constants/routes';
import useAuthContext from '@/hooks/auth/useAuthContext';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const handleLogout = () => {
    const logoutConfirmMessage = confirm('정말 로그아웃 하시겠습니까 ?');

    if (logoutConfirmMessage) {
      dispatch({ type: 'LOGOUT' });
      localStorage.removeItem('user');
      navigate(ROUTES.HOME.PATH);
    }
  };

  return { handleLogout };
};

export default useLogout;
