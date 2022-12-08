import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
body  {
  margin : 0 auto;
  width : 50%;
  height : 100vh;

  border : 1px solid black;
}
`;

export default GlobalStyles;
