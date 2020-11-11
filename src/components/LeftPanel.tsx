import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import Caption from './Caption';
import Container from './Container';
import H1 from './H1';
import Label from './Label';
import ProgressBar from './ProgressBar';
import { PrimaryValue, SecondaryValue } from './Value';
import { ReactComponent as ArrowUp } from '../icons/ArrowUp.svg';
import { ReactComponent as ArrowDown } from '../icons/ArrowDown.svg';
import { ReactComponent as Check } from '../icons/Check.svg';
import { ReactComponent as User } from '../icons/User.svg';
import { ReactComponent as Graph } from '../icons/Graph.svg';
import { ReactComponent as Photo } from '../icons/Photo.svg';
import { ReactComponent as Book } from '../icons/Book.svg';

const DataContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: ${theme.spacing(5)};
`;

const DataItem = styled.div`
  width: 70px;
  margin-right: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(3)};
`;

const IconsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(2)};
`;

const IconWrapper = styled.div`
  margin-right: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(2)};
`;

const LeftPanel: React.FC = () => {
  return (
    <>
      <H1>Roamer App (Android SDK test)</H1>
      <ProgressBar progress={30}/>
      <DataContainer>
        <DataItem>
          <Caption>Done</Caption>
          <SecondaryValue>{100}%</SecondaryValue>
        </DataItem>
        <DataItem>
          <Caption>Base words</Caption>
          <SecondaryValue>{160246}</SecondaryValue>
        </DataItem>
        <DataItem>
          <Caption>Team</Caption>
          <PrimaryValue>{26}</PrimaryValue>
        </DataItem>
        <DataItem>
          <Caption>Keys</Caption>
          <SecondaryValue>{1834}</SecondaryValue>
        </DataItem>
        <DataItem>
          <Caption>QA issues</Caption>
          <PrimaryValue>{47514}</PrimaryValue>
        </DataItem>
        <DataItem>
          <Caption>Done</Caption>
          <SecondaryValue>{100}%</SecondaryValue>
        </DataItem>
      </DataContainer>

      <IconsContainer>
        <IconWrapper><ArrowUp/></IconWrapper>
        <IconWrapper><ArrowDown/></IconWrapper>
        <IconWrapper><Check/></IconWrapper>
        <IconWrapper><User/></IconWrapper>
        <IconWrapper><Graph/></IconWrapper>
        <IconWrapper><Photo/></IconWrapper>
        <IconWrapper><Book/></IconWrapper>
      </IconsContainer>

      <Label text='Roamer' color='#E78946'/>
      <Label text='iOS' color='#40F362'/>
    </>
  );
};

export default LeftPanel;
