import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ShadowCard from '@/components/@commons/Card/ShadowCard';
import SignUpForm from '@/components/Auth/SignUp/SignUp';
import ShadowButton from '@/components/@commons/Button/ShadowButton';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <>
        <ShadowButton
          type='button'
          content='뒤로가기'
          onClick={() => navigate(-1)}
        />
        <ShadowCard width='100%' height='500px' title='회원가입 페이지'>
          <SignUpForm />
        </ShadowCard>
      </>
    </PageWrapper>
  );
};

export default SignUp;
