import React from 'react';
import styled from 'styled-components';

import { Language } from '../store/types';
import Caption from './Caption';
import FlagIcon from './FlagIcon';
import H2 from './H2';
import ProgressBar from './ProgressBar';
import { PrimaryValue, SecondaryValue } from './Value';
import theme from '../theme';

const DataWrapper = styled.div`
  margin-top: ${theme.spacing(3)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const H2Margin = styled(H2)`
  display: inline-block;
  margin-left: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1)};
`;

type LanguageItem = {
  language: Language;
};

const LanguageItem: React.FC<LanguageItem> = ({ language }) => {
  return (
    <>
      <FlagIcon name={language.name}/>
      <H2Margin>{language.name}</H2Margin>
      <ProgressBar progress={language.done}/>
      <DataWrapper>
        <div>
          <Caption>Done</Caption>
          <SecondaryValue>{language.done}%</SecondaryValue>
        </div>
        <div>
          <Caption>Words to do</Caption>
          <PrimaryValue>{language.toDo}</PrimaryValue>
        </div>
        <div>
          <Caption>Unverified</Caption>
          <PrimaryValue>{language.unverified}</PrimaryValue>
        </div>
      </DataWrapper>
    </>
  );
};

export default LanguageItem;
