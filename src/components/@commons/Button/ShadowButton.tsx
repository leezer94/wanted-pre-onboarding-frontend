import * as S from './Button.style';

type ShadowButton = {
  content: string;
};

const ShadowButton = ({ content }: ShadowButton) => {
  return <S.ShadowButton type='button'>{content}</S.ShadowButton>;
};

export default ShadowButton;
