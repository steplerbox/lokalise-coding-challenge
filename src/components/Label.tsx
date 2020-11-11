import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

const LabelComponent = styled.span`
  display: inline-block;
  background-color: ${props => props.color};
  border-radius: 10px;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  color: ${theme.palette.text.primary};
  font-size: 12px;
  line-height: 12px;
  margin-right: ${theme.spacing(1)};
`;

type Label = {
  text: string;
  color: string;
}

const Label: React.FC<Label> = ({ text, color }) => {
  return (
    <LabelComponent color={color}>{text}</LabelComponent>
  );
};

export default Label;
