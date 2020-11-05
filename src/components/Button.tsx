import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background: transparent;
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 4px;
  color: ${theme.palette.primary.main};
  cursor: pointer;
  padding: ${theme.spacing(2)};
  outline: none;
  ${theme.typography.button};

  &:hover {
    background: ${theme.palette.primary.main};
    color: ${theme.palette.text.primary};
  }

  &:active {
    background: ${theme.palette.primary.main};
    color: ${theme.palette.text.primary};
  }
`;

export default Button;
