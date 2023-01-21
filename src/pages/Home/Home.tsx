import * as S from './Home.style';
import ShadowButton from '@/components/@commons/Button/ShadowButton';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <ShadowButton
        type='button'
        content='Login'
        onClick={() => navigate(ROUTES.LOGIN.PATH)}
      />
      <ShadowButton
        type='button'
        content='Sign Up'
        onClick={() => navigate(ROUTES.SIGN_UP.PATH)}
      />
      <ShadowButton
        type='button'
        content='Todo'
        onClick={() => navigate(ROUTES.TODO.PATH)}
      />
    </S.Wrapper>
  );
};
export default Home;
