import styled from 'styled-components';
import theme from '../theme';

const H1 = styled.h1`
  ${theme.typography.h1};
  color: ${theme.palette.primary.main};
  margin: 0;
  margin-bottom: ${theme.spacing(6)};
`;

export default H1;
