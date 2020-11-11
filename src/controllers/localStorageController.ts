import store from 'store';
import { Language } from '../store/types';

export const mockData = {
  languages: [
    {
      id: '0',
      name: 'English',
      done: 20,
      toDo: 16246,
      unverified: 50000
    },
    {
      id: '1',
      name: 'English',
      done: 40,
      toDo: 16246,
      unverified: 50000
    },
    {
      id: '2',
      name: 'English',
      done: 60,
      toDo: 16246,
      unverified: 50000
    },
    {
      id: '3',
      name: 'English',
      done: 80,
      toDo: 16246,
      unverified: 50000
    },
    {
      id: '4',
      name: 'English',
      done: 100,
      toDo: 16246,
      unverified: 50000
    }
  ]
};

const getLanguages = () => {
  let languages = store.get('languages');

  if (!languages) {
    languages = mockData.languages;
    store.set('languages', languages);
  }

  return languages;
};

const setLanguage = (language: Language) => {
  let languages = store.get('languages');
  store.set('languages', [...languages, language]);
};

export default {
  getLanguages,
  setLanguage
};
