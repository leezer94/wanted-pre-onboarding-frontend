import useAuthContext from '@/hooks/useAuthContext';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/components/constants/routes';

const PublicRouter = () => {
  const { user: isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      alert('로그인한 사용자는 접근 불가능한 페이지입니다.');
    }
  }, [isAuth]);

  return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PublicRouter;
