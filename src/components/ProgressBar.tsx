import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

type ProgressBar = {
  progress: number
};

const Wrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.palette.secondary.light}
`;

const ProgressBar: React.FC<ProgressBar> = ({ progress }) => {
  const color = progress < 25
    ? 'error'
    : progress < 75
      ? 'warning'
      : 'success';

  const Progress = styled.div`
    background-color: ${theme.palette[color].main};
    width: ${progress}%;
    height: 100%;
  `;

  return (
    <Wrapper>
      <Progress/>
    </Wrapper>
  );
};

export default ProgressBar;
