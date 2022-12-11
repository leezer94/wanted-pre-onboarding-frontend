import * as S from './TodoList.style';
import List from '@/components/Todos/Main/TodoList/List';

const TodoList = ({ data, setData }: { data: any; setData: any }) => {
  return (
    <S.Ul>
      {data?.map(
        ({
          id,
          todo,
          isCompleted,
        }: {
          id: number;
          todo: string;
          isCompleted: boolean;
        }) => {
          return (
            <List
              id={id}
              key={id}
              title={todo}
              isCompleted={isCompleted}
              data={data}
              setData={setData}
            />
          );
        },
      )}
    </S.Ul>
  );
};

export default TodoList;
