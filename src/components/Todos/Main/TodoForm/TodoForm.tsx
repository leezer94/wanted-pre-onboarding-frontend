import * as S from './TodoForm.style';
import { useState } from 'react';
import { getTodos } from '@/apis';

export const TodoForm = () => {
  const [title, setTitle] = useState<string>('');

  return (
    <S.Form>
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
        <S.Button type='button' name='submit' onClick={() => getTodos()}>
          Add
        </S.Button>
      </S.Container>
    </S.Form>
  );
};

export default TodoForm;
