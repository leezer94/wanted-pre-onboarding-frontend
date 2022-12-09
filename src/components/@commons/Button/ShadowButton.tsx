import * as S from './Button.style';

type ShadowButton = {
  type: 'submit' | 'button';
  content: string;
  onClick?: () => void;
};

const ShadowButton = ({ type, content, ...rest }: ShadowButton) => {
  return (
    <S.ShadowButton type={type} {...rest}>
      {content}
    </S.ShadowButton>
  );
};

export default ShadowButton;
