import useAuthContext from '@/hooks/useAuthContext';

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
  };

  return { handleLogout };
};

export default useLogout;
