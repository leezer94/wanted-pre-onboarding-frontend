import styled from 'styled-components';

type ButtonProps = {
  width: number | string;
  height: number | string;
};

const ShadowCard = styled.div<ButtonProps>`
  display: flex;

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

export { ShadowCard };
