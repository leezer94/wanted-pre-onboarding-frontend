import * as S from './TodoForm.style';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { createTodo } from '@/apis';

export const TodoForm = ({
  data,
  setData,
}: {
  data: Todo[];
  setData: Dispatch<SetStateAction<any>>;
}) => {
  const [title, setTitle] = useState<string>('');

  const handleAddTodo = async (
    e: FormEvent<HTMLFormElement>,
    title: string,
  ) => {
    e.preventDefault();

    const newTodo = await createTodo(title);

    setData([...data, newTodo]);
    setTitle('');
  };

  return (
    <S.Form onSubmit={(e) => handleAddTodo(e, title)}>
      <S.Container>
        <label htmlFor='todo-input' hidden>
          Add New Task
        </label>
        <S.Input
          name='todo-input'
          type='text'
          value={title}
          placeholder='add new task here'
          autoComplete='off'
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Button type='submit'>Add</S.Button>
      </S.Container>
    </S.Form>
  );
};

export default TodoForm;
