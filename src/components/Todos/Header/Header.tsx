import * as S from './Header.style';
import ShadowButton from '@/components/@commons/Button/ShadowButton';
import useLogout from '@/hooks/auth/useLogout';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@/components/constants/routes';

const Header = () => {
  const navigate = useNavigate();
  const { handleLogout } = useLogout();

  return (
    <S.Header>
      <S.Title>📋 TODO LIST</S.Title>
      <S.InputContainer></S.InputContainer>
      <S.Nav>
        <ShadowButton
          type='button'
          content='Home'
          onClick={() => navigate(ROUTES.HOME.PATH)}
        />
        <ShadowButton
          type='button'
          content='Logout'
          onClick={() => handleLogout()}
        />
      </S.Nav>
    </S.Header>
  );
};

export default Header;
