import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from './components/Button';
import Container from './components/Container';
import LanguageItem from './components/LanguageItem';
import theme from './theme';
import { createLanguage, getLanguages } from './reducers/languages';
import { RootState } from './reducers';
import { Language } from './store/types';

const ButtonsContainer = styled(Container)`
  display: flex;
`;

const MarginButton = styled(Button)`
  margin-right: 10px;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled(Container)`
  width: 200px;
  padding: ${theme.spacing(3)};
  border-right: 1px solid ${theme.palette.secondary.light}
`;

const RightContainer = styled(Container)`
  width: 1000px;
  padding: ${theme.spacing(3)};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { languages } = useSelector((store: RootState) => store.languages);

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  const handleAddLanguage = () => {
    const name = window.prompt('Add language');

    if (name) {
      dispatch(createLanguage(name));
    }
  };

  return (
    <Container>
      <ButtonsContainer>
        <MarginButton>New project ⇧⌘P</MarginButton>
        <MarginButton>Expand all</MarginButton>
        <MarginButton>Collapse all</MarginButton>
      </ButtonsContainer>
      <MainContainer>
        <LeftContainer>

        </LeftContainer>
        <RightContainer>
          {languages.map((l: Language) => <LanguageItem key={l.id} language={l}/>)}
          <Button onClick={handleAddLanguage}>Add language</Button>
        </RightContainer>
      </MainContainer>
    </Container>
  );
};

export default App;
