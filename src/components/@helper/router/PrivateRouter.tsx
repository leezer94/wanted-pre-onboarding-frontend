import useAuthContext from '@/hooks/useAuthContext';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/components/constants/routes';

const PrivateRouter = () => {
  const { user: isAuth } = useAuthContext();

  useEffect(() => {
    if (!isAuth) {
      alert('로그인 후에 이용가능한 페이지 입니다.');
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN.PATH} replace />;
};

export default PrivateRouter;
