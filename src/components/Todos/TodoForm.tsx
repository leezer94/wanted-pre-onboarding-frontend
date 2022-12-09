import useLogout from '@/hooks/useLogout';

const TodoForm = () => {
  const { handleLogout } = useLogout();

  return (
    <div>
      <button onClick={() => handleLogout()}>로그아웃</button>
    </div>
  );
};

export default TodoForm;
