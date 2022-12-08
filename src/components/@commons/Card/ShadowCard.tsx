import * as S from './Card.style';

type ShadowCard = {
  width: number | string;
  height: number | string;
  children: JSX.Element;
};

const ShadowCard = ({ children, width, height }: ShadowCard) => {
  return (
    <S.ShadowCard width={width} height={height}>
      {children}
    </S.ShadowCard>
  );
};

export default ShadowCard;
