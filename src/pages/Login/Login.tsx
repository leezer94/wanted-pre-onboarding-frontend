import ShadowCard from '@/components/@commons/Card/ShadowCard';
import PageWrapper from '@/components/@commons/PageWrapper/PageWrapper';
import SignInForm from '@/components/Auth/SignIn/SignIn';
import ShadowButton from '@/components/@commons/Button/ShadowButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <>
        <ShadowButton
          type='button'
          content='뒤로가기'
          onClick={() => navigate(-1)}
        />
        <ShadowCard width='100%' height='500px' title='로그인 페이지'>
          <SignInForm />
        </ShadowCard>
      </>
    </PageWrapper>
  );
};

export default Login;
