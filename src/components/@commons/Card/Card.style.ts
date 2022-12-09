import styled from 'styled-components';

type CardProps = {
  width: number | string;
  height: number | string;
};

const ShadowCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 400px;
  min-height: 400px;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.WHITE};
  border-radius: 20px;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Header = styled.span`
  font-size: 20px;
  margin-top: 20px;
`;

export { ShadowCard, HeaderContainer, Header };
