import styled from 'styled-components';
import theme from '../theme';

const H2 = styled.h2`
  ${theme.typography.h2};
  color: ${theme.palette.primary.main};
  margin: 0;
  margin-bottom: ${theme.spacing(2)};
`;

export default H2;
