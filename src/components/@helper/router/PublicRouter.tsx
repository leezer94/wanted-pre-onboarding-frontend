import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import ROUTES from '@/constants/routes';
import { MESSAGE } from '@/constants';

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
        alert(MESSAGE.PUBLIC_ROUTE_TODO);
      } else alert(MESSAGE.PUBLIC_ROUTE);
    }
  }, [isAuth]);

  if (pathname === ROUTES.HOME.PATH) {
    return isAuth ? <Navigate to={ROUTES.TODO.PATH} replace /> : <Outlet />;
  }

  return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PublicRouter;
