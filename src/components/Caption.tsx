import styled from 'styled-components';
import theme from '../theme';

const Caption = styled.p`
  ${theme.typography.caption};
  color: ${theme.palette.secondary.main};
  margin: 0;
  margin-bottom: ${theme.spacing(1)};
`;

export default Caption;
