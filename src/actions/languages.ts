import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RootState } from '../reducers';
import storage from '../controllers/localStorageController';

export const GET_LANGUAGES = 'GET_LANGUAGES';
export const CREATE_LANGUAGE = 'CREATE_LANGUAGE';

export const getLanguages = (): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
  return async dispatch => {
    const languages = storage.getLanguages();

    dispatch({ type: GET_LANGUAGES, languages });
  };
};

export const createLanguage = (name: string): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
  return async dispatch => {
    const language = {
      id: Math.random().toString(),
      name,
      done: Math.floor(Math.random() * 100),
      toDo: Math.floor(Math.random() * 1000),
      unverified: Math.floor(Math.random() * 10000)
    };

    storage.setLanguage(language);

    dispatch({ type: CREATE_LANGUAGE, language });
  };
};
