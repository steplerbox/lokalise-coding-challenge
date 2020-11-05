import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { LanguagesState } from '../store/types';
import { RootState } from './index';
import { mockData } from '../store';

const initialState = {
  languages: []
};

const GET_LANGUAGES = 'GET_LANGUAGES';
const CREATE_LANGUAGE = 'CREATE_LANGUAGE';

export const getLanguages = (): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
  return async dispatch => {
    const languagesString = localStorage.getItem('languages');
    let languages;
    if (languagesString) {
      languages = JSON.parse(languagesString);
    } else {
      languages = mockData.languages;
      localStorage.setItem('languages', JSON.stringify(languages));
    }

    dispatch({ type: GET_LANGUAGES, languages });
  };
};

export const createLanguage = (name: string): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
  return async dispatch => {
    const language = {
      id: Math.random().toString(),
      name,
      done: 20,
      wordsToDo: 16246,
      unverified: 50000,
    }

    let languages = JSON.parse(localStorage.getItem('languages') || '[]');
    localStorage.setItem('languages', JSON.stringify([...languages, language]));

    dispatch({ type: CREATE_LANGUAGE, language });
  };
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
