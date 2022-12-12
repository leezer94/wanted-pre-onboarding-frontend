import styled from 'styled-components';

const ShadowButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 40px;
  border: 1px solid none;
  border-radius: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? 'gray' : theme.BLUE};
  box-shadow: 20px 30px 30px 0 rgb(0 31 68 / 30%);
  color: white;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  text-decoration: none;

  letter-spacing: 1px;
`;

export { ShadowButton };
