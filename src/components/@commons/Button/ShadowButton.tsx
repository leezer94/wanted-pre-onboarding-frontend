import * as S from './Button.style';

type ShadowButton = {
  type: 'submit' | 'button';
  content: string;
  disabled?: boolean;
  onClick?: () => void;
};

const ShadowButton = ({ type, content, disabled, ...rest }: ShadowButton) => {
  return (
    <S.ShadowButton type={type} disabled={disabled} {...rest}>
      {content}
    </S.ShadowButton>
  );
};

export default ShadowButton;
