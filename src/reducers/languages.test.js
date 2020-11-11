import languages from './languages';
import { GET_LANGUAGES, CREATE_LANGUAGE } from '../actions/languages';

describe('languages reducer', () => {
  it('should return the initial state', () => {
    expect(languages(undefined, {})).toEqual({ languages: [] });
  });

  it('should handle GET_LANGUAGES', () => {
    const initialState = { languages: [] };
    const action = {
      type: GET_LANGUAGES,
      languages: [{ name: 'test 1' }, { name: 'test 2' }]
    };
    const expectedState = {
      languages: [{ name: 'test 1' }, { name: 'test 2' }]
    };

    expect(languages(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_LANGUAGE', () => {
    const initialState = { languages: [{ name: 'test 1' }, { name: 'test 2' }] };
    const action = {
      type: CREATE_LANGUAGE,
      language: { name: 'test 3' }
    };
    const expectedState = {
      languages: [{ name: 'test 1' }, { name: 'test 2' }, { name: 'test 3' }]
    };

    expect(languages(initialState, action)).toEqual(expectedState);
  });
});
