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

const resolveColor = (progress: number) => {
  const color = progress < 25
    ? 'error'
    : progress < 75
      ? 'warning'
      : 'success';

  return theme.palette[color].main;
};

const Progress = styled.div`
    background-color: ${(props: ProgressBar) => resolveColor(props.progress)};
    width: ${(props: ProgressBar) => props.progress}%;
    height: 100%;
  `;

const ProgressBar: React.FC<ProgressBar> = ({ progress }) => {
  return (
    <Wrapper>
      <Progress progress={progress}/>
    </Wrapper>
  );
};

export default ProgressBar;
