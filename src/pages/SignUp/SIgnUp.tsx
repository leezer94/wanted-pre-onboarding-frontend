import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ShadowCard from '@/components/@commons/Card/ShadowCard';
import SignUpForm from '@/components/Auth/SignUp/SignUp';

const SignUp = () => {
  return (
    <PageWrapper>
      <ShadowCard width='100%' height='500px'>
        <SignUpForm />
      </ShadowCard>
    </PageWrapper>
  );
};

export default SignUp;
