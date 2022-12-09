import ShadowCard from '@/components/@commons/Card/ShadowCard';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import SignInForm from '@/components/Auth/SignIn/SignIn';

const Login = () => {
  return (
    <PageWrapper>
      <ShadowCard width='100%' height='500px' title='로그인 페이지'>
        <SignInForm />
      </ShadowCard>
    </PageWrapper>
  );
};

export default Login;
