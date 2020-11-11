import React from 'react';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton } from './Button';
import Container from './Container';

const ButtonsContainer = styled(Container)`
  display: flex;
`;

const PrimaryButtonMargin = styled(PrimaryButton)`
  margin-right: 10px;
`;

const SecondaryButtonMargin = styled(SecondaryButton)`
  margin-right: 10px;
`;

const TopPanel: React.FC = () => {
  return (
    <ButtonsContainer>
      <PrimaryButtonMargin>New project ⇧⌘P</PrimaryButtonMargin>
      <SecondaryButtonMargin>Expand all</SecondaryButtonMargin>
      <SecondaryButtonMargin>Collapse all</SecondaryButtonMargin>
    </ButtonsContainer>
  );
};

export default TopPanel;
