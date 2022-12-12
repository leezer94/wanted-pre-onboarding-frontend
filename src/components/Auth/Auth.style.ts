import styled from 'styled-components';

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  top: 50%;
`;

const Border = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  margin-top: 40px;
  color: red;
  font-size: 18px;
  letter-spacing: 1px;
`;

const InputErrorMessage = styled.span`
  color: red;
  margin-top: 10px;
  font-size: 13px;
`;

export { AuthForm, Border, ErrorMessage, InputErrorMessage };
