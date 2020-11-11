import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Arial';
    padding: ${theme.spacing(8)};
  }
`;

export default GlobalStyle;
