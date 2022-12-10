import styled from 'styled-components';

const Ul = styled.ul`
  margin-top: 0.75rem;
  padding-left: 0px;
`;

const List = styled.li`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.625rem;
  align-items: center;
`;

const Button = styled.button`
  background-color: rgb(249, 250, 251);
  font-size: 0.7rem;
  line-height: 1.25rem;
  padding: 1px;
  width: 50px;
  border: none;
  border-radius: 50px;

  &:active {
    background-color: rgb(249, 250, 251);
    box-shadow: 0 1px #898989;
    transform: translateY(1px);
  }
`;

const TaskButton = styled(Button)`
  margin-right: 0.25rem;
`;

const Span = styled.span`
  width: 100%;
  padding-left: 0.5rem;
`;

export { Ul, TaskButton, Button, List, Span };
