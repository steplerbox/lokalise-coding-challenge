import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../reducers';
import { createLanguage, getLanguages } from '../actions/languages';
import Container from '../components/Container';
import TopPanel from '../components/TopPanel';
import LanguageItemsList from '../components/LanguageItemsList';
import LeftPanel from '../components/LeftPanel';
import LanguageModal from '../components/LanguageModal';
import theme from '../theme';

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled(Container)`
  width: 180px;
  padding-right: ${theme.spacing(5)};
  border-right: 1px solid ${theme.palette.secondary.light}
`;

const RightContainer = styled(Container)`
  width: 920px;
  padding-left: ${theme.spacing(5)};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: baseline;
`;

const Languages: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { languages } = useSelector((store: RootState) => store.languages);

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  const handleAddLanguage = (name: string) => {
    setOpen(false);
    if (name) {
      dispatch(createLanguage(name));
    }
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <TopPanel/>
      <MainContainer>
        <LeftContainer>
          <LeftPanel/>
        </LeftContainer>
        <RightContainer>
          <LanguageItemsList languages={languages} onAddLanguage={handleOpenModal}/>
        </RightContainer>
      </MainContainer>
      <LanguageModal
        open={open}
        onAdd={handleAddLanguage}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Languages;
