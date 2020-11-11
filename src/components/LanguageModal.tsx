import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Select, { OptionTypeBase } from 'react-select';

import H1 from '../components/H1';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import theme from '../theme';
import { languages } from '../constants/languages';

type LanguageModal = {
  open: boolean;
  onAdd(name: string): void;
  onClose(): void;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonMargin = styled(SecondaryButton)`
  margin-right: ${theme.spacing(2)};
`;

const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    width: '625px',
    marginBottom: theme.spacing(5)
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? theme.palette.primary.main : 'transparent',
    color: state.isSelected ? theme.palette.text.primary : theme.palette.secondary.main,
    cursor: 'pointer',
    fontSize: '14px'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: theme.palette.secondary.main,
    fontSize: '14px'
  })
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    overflow: 'none'
  }
};

const LanguageModal: React.FC<LanguageModal> = ({ open, onAdd, onClose }) => {
  const options = useMemo(() => Object.keys(languages).map(key => ({ value: languages[key], label: key })), []);
  const [selectedOption, setSelectedOption] = useState<OptionTypeBase>(options[0]);

  const handleAdd = () => onAdd(selectedOption.value);

  const handleLanguageChange = (option: OptionTypeBase) => {
    setSelectedOption(option);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={open}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <H1>Add languages</H1>

      <Select
        value={selectedOption}
        options={options}
        styles={selectStyles}
        onChange={handleLanguageChange}
      />

      <ButtonsContainer>
        <ButtonMargin onClick={onClose}>Close</ButtonMargin>
        <PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
      </ButtonsContainer>
    </Modal>
  );
};

export default LanguageModal;
