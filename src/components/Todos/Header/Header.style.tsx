import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 90%;
  height: 2em;
  border-radius: 1em;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 40px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;

  /* > .active {
    color: black;
    background-color: rgb(255, 255, 250);
    border-top: 2px solid #f9826c;
  } */
`;

const InputContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 230px;
  min-width: 230px;
`;

const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 250);
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  width: 110px;
  letter-spacing: 3px;
  text-align: center;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
`;

export { Header, Title, Nav, InputContainer, Input, Tab };
