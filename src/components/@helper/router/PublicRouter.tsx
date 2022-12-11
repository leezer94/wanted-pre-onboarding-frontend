import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import ROUTES from '@/components/constants/routes';

const PublicRouter = () => {
  const { pathname } = useLocation();
  let isAuth: AuthType = null;
  const value = localStorage.getItem('user');

  if (typeof value === 'string') {
    isAuth = JSON.parse(value);
  }

  useEffect(() => {
    if (isAuth) {
      if (pathname === ROUTES.HOME.PATH) {
        alert('이미 로그인 되어있어 Todo 페이지로 리 다이렉팅 됩니다.');
      } else alert('로그인한 사용자는 접근 불가능한 페이지입니다.');
    }
  }, [isAuth]);

  if (pathname === ROUTES.HOME.PATH) {
    return isAuth ? <Navigate to={ROUTES.TODO.PATH} replace /> : <Outlet />;
  }

  return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PublicRouter;
