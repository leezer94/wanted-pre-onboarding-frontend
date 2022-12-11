import * as S from './TodoHeader.style';

const TodoHeader = ({ data }: { data: Todo[] }) => {
  return (
    <S.Header>
      <S.Title>LIST ITEMS</S.Title>
      <S.Span>Total {data.length}</S.Span>
    </S.Header>
  );
};

export default TodoHeader;
