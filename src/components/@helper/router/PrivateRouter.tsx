import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/components/constants/routes';

const PrivateRouter = () => {
  let isAuth: AuthType = null;
  const value = localStorage.getItem('user');

  if (value) {
    isAuth = JSON.parse(value);
  }

  useEffect(() => {
    if (!isAuth) {
      alert('로그인 후에 이용가능한 페이지 입니다.');
    }
  }, [isAuth]);

  return !isAuth ? <Navigate to={ROUTES.LOGIN.PATH} replace /> : <Outlet />;
};

export default PrivateRouter;
