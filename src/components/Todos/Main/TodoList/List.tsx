import { updateTodo, deleteTodo } from '@/apis';
import { memo, Dispatch, SetStateAction } from 'react';
import * as S from './TodoList.style';

const List = memo(
  ({
    id,
    title,
    isCompleted,
    data,
    setData,
  }: {
    id: number;
    title: string;
    isCompleted: boolean;
    data: Todo[];
    setData: Dispatch<SetStateAction<any>>;
  }) => {
    const handleUpdateTodo = async (id: number) => {
      const dataCopied = [...data];
      const index = data.findIndex((todo: Todo) => todo.id === id);
      const target = data.find((todo: Todo) => todo.id === id);
      const newTodo: string | null = prompt('새로운 할일을 입력해 주세요.');

      if (newTodo === null) return;

      const modifiedTodo = await updateTodo(id, {
        todo: newTodo,
        isCompleted: target?.isCompleted,
      });

      dataCopied.splice(index, 1, modifiedTodo);
      setData(dataCopied);
    };

    const handleTodoStatus = async (id: number) => {
      const dataCopied = [...data];
      const index = data.findIndex((todo: Todo) => todo.id === id);
      const target = data.find((todo: Todo) => todo.id === id);

      const modifiedTodo = await updateTodo(id, {
        todo: target?.todo,
        isCompleted: !target?.isCompleted,
      });

      dataCopied.splice(index, 1, modifiedTodo);
      setData(dataCopied);
    };

    const handleDeleteTodo = (id: number) => {
      const newData = data.filter((todo: Todo) => todo.id !== id);

      deleteTodo(id);
      setData(newData);
    };

    return (
      <S.List>
        <S.Span className={isCompleted ? 'active' : undefined}>{title}</S.Span>
        <S.TaskButton onClick={() => handleTodoStatus(id)}>Done</S.TaskButton>
        <S.TaskButton onClick={() => handleUpdateTodo(id)}>Edit</S.TaskButton>
        <S.Button onClick={() => handleDeleteTodo(id)}>Del</S.Button>
      </S.List>
    );
  },
);

List.displayName = 'List';

export default List;
