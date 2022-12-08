import * as S from './Button.style';

type ShadowButton = {
  content: string;
  onClick?: () => void;
};

const ShadowButton = ({ content, ...rest }: ShadowButton) => {
  return (
    <S.ShadowButton type='button' {...rest}>
      {content}
    </S.ShadowButton>
  );
};

export default ShadowButton;
