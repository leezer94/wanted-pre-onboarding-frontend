import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ShadowCard from '@/components/@commons/Card/ShadowCard';
import SignUpForm from '@/components/Auth/SignUp/SignUp';

const SignUp = () => {
  return (
    <PageWrapper>
      <ShadowCard width='100%' height='500px' title='회원가입 페이지'>
        <SignUpForm />
      </ShadowCard>
    </PageWrapper>
  );
};

export default SignUp;
