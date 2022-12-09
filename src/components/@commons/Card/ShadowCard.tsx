import * as S from './Card.style';

type ShadowCard = {
  width: number | string;
  height: number | string;
  title: string;
  children: JSX.Element;
};

const ShadowCard = ({ children, width, height, title }: ShadowCard) => {
  return (
    <S.ShadowCard width={width} height={height}>
      <S.HeaderContainer>
        <S.Header>{title}</S.Header>
      </S.HeaderContainer>
      {children}
    </S.ShadowCard>
  );
};

export default ShadowCard;
