import * as S from './Main.style';
import TodoForm from './TodoForm/TodoForm';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoList from './TodoList/TodoList';
import { useState, useEffect } from 'react';
import { getTodos } from '@/apis';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();

      setData(todos);
    };

    console.log('todo');

    fetchData();
  }, []);

  return (
    <S.Main>
      <S.Wrapper>
        <TodoHeader data={data} />
        <TodoForm data={data} setData={setData} />
        <TodoList data={data} setData={setData} />
      </S.Wrapper>
    </S.Main>
  );
};

export default Main;
