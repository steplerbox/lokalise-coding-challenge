import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 4px;
  cursor: pointer;
  padding: ${theme.spacing(2)};
  outline: none;
  ${theme.typography.button};
  
  &:hover {
    background: ${theme.palette.primary.dark};
    border-color: ${theme.palette.primary.dark};
    color: ${theme.palette.text.primary};
  }

  &:active {
    background: ${theme.palette.primary.dark};
    border-color: ${theme.palette.primary.dark};
    color: ${theme.palette.text.primary};
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${theme.palette.primary.main};
  color: ${theme.palette.text.primary};
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${theme.palette.primary.main};
`;
