import * as S from './TodoList.style';

const List = ({ id, title }: { id: number; title: string }) => {
  return (
    <S.List>
      <S.Span>{title}</S.Span>
      <S.TaskButton>Done</S.TaskButton>
      <S.TaskButton>Edit</S.TaskButton>
      <S.Button>Del</S.Button>
    </S.List>
  );
};

export default List;
