import * as S from './PageWrapper.style';

const PageWrapper = ({ children }: { children: JSX.Element }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default PageWrapper;
