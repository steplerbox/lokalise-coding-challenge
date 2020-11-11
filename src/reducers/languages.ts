import { AnyAction } from 'redux';

import { LanguagesState } from '../store/types';
import { GET_LANGUAGES, CREATE_LANGUAGE } from '../actions/languages';

const initialState = {
  languages: []
};

export default function languages(
  state: LanguagesState = initialState,
  action: AnyAction
) {

  switch (action.type) {
    case GET_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      };

    case CREATE_LANGUAGE:
      return {
        ...state,
        languages: [...state.languages, action.language]
      };
  }

  return state;
}
