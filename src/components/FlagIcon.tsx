import React from 'react';

import { languages } from '../constants/languages';
import { ReactComponent as GB } from '../icons/GB.svg';
import { ReactComponent as RU } from '../icons/RU.svg';
import { ReactComponent as IT } from '../icons/IT.svg';
import { ReactComponent as MK } from '../icons/MK.svg';

const FlagIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case languages.English:
      return <GB/>;
    case languages.Russian:
      return <RU/>;
    case languages.Italian:
      return <IT/>;
    case languages.Macedonian:
      return <MK/>;
    default:
      return null;
  }
};

export default FlagIcon;
