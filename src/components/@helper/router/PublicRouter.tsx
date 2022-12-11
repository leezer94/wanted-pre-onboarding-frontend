import useAuthContext from '@/hooks/auth/useAuthContext';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/components/constants/routes';

const PublicRouter = () => {
  let isAuth: AuthType = null;
  const value = localStorage.getItem('user');

  if (typeof value === 'string') {
    isAuth = JSON.parse(value);
  }

  useEffect(() => {
    if (isAuth) {
      alert('로그인한 사용자는 접근 불가능한 페이지입니다.');
    }
  }, [isAuth]);

  return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PublicRouter;
