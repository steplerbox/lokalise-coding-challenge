import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getLanguages, createLanguage, GET_LANGUAGES, CREATE_LANGUAGE } from './languages';
import storage, { mockData } from '../controllers/localStorageController';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('languages actions', () => {
  it('creates GET_LANGUAGES action when getting languages from the local storage', () => {
    const getLanguagesMock = jest.fn();
    getLanguagesMock.mockReturnValueOnce(mockData);
    storage.getLanguages = getLanguagesMock;

    const expectedActions = [
      { type: GET_LANGUAGES, languages: mockData }
    ];
    const store = mockStore({ languages: [] });

    return store.dispatch(getLanguages()).then(() => {
      expect(getLanguagesMock.mock.calls.length).toBe(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates CREATE_LANGUAGE and updates languages in the local storage', () => {
    const setLanguageMock = jest.fn();
    storage.setLanguage = setLanguageMock;

    const mockLanguageName = 'test';

    const expectedActions = [
      { type: CREATE_LANGUAGE, language: { name: mockLanguageName } }
    ];
    const store = mockStore({ languages: [] });

    return store.dispatch(createLanguage(mockLanguageName)).then(() => {
      expect(setLanguageMock.mock.calls.length).toBe(1);
      expect(setLanguageMock.mock.calls[0][0]).toHaveProperty('name', mockLanguageName);
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });
});
