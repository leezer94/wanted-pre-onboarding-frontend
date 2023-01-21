import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/constants/routes';
import { MESSAGE } from '@/constants';

const PrivateRouter = () => {
  let isAuth: AuthType = null;
  const value = localStorage.getItem('user');

  if (value) {
    isAuth = JSON.parse(value);
  }

  useEffect(() => {
    if (!isAuth) {
      alert(MESSAGE.PRIVATE_ROUTE);
    }
  }, [isAuth]);

  return !isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PrivateRouter;
