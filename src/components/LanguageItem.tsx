import React from 'react';
import styled from 'styled-components';

import H2 from './H2';
import Caption from './Caption';
import ProgressBar from './ProgressBar';
import { Language } from '../store/types';
import theme from '../theme';

const Wrapper = styled.div`
  width: 205px;
  margin: ${theme.spacing(3)};
`;

const Percent = styled.span`
  font-size: 17px;
  color: ${theme.palette.secondary.dark}
`;

const Value = styled.span`
  font-size: 17px;
  color: ${theme.palette.primary.main}
`;

const DataWrapper = styled.div`
  margin-top: ${theme.spacing(3)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type LanguageItem = {
  language: Language;
};

const LanguageItem: React.FC<LanguageItem> = ({ language }) => {
  return (
    <Wrapper>
      <H2>{language.name}</H2>
      <ProgressBar progress={language.done}/>
      <DataWrapper>
        <div>
          <Caption>Done</Caption>
          <Percent>{language.done}%</Percent>
        </div>
        <div>
          <Caption>Words to do</Caption>
          <Value>{language.toDo}</Value>
        </div>
        <div>
          <Caption>Unverified</Caption>
          <Value>{language.unverified}</Value>
        </div>
      </DataWrapper>
    </Wrapper>
  );
};

export default LanguageItem;
