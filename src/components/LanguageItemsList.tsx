import React from 'react';

import { SecondaryButton } from './Button';
import LanguageItem from './LanguageItem';
import { Language } from '../store/types';
import styled from 'styled-components';
import theme from '../theme';

type LanguageItemsList = {
  languages: Language[]
  onAddLanguage(): void
}

const ItemWrapper = styled.div`
  width: 205px;
  margin-right: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(4)};
`;

const LanguageItemsList: React.FC<LanguageItemsList> = ({ languages, onAddLanguage }) => {

  return (
    <>
      {languages.map((l: Language) => (
        <ItemWrapper key={l.id}>
          <LanguageItem language={l}/>
        </ItemWrapper>)
      )}
      <ItemWrapper>
        <SecondaryButton onClick={onAddLanguage}>Add language</SecondaryButton>
      </ItemWrapper>
    </>
  );
};

export default LanguageItemsList;
