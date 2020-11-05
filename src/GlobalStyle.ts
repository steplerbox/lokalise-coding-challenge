import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Arial';
  }
`;

export default GlobalStyle;
