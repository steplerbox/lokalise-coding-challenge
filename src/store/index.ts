import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export const  mockData = {
  languages: [
    {
      id: '0',
      name: 'English',
      done: 20,
      toDo: 16246,
      unverified: 50000,
    },
    {
      id: '1',
      name: 'English',
      done: 40,
      toDo: 16246,
      unverified: 50000,
    },
    {
      id: '2',
      name: 'English',
      done: 60,
      toDo: 16246,
      unverified: 50000,
    },
    {
      id: '3',
      name: 'English',
      done: 80,
      toDo: 16246,
      unverified: 50000,
    },
    {
      id: '4',
      name: 'English',
      done: 100,
      toDo: 16246,
      unverified: 50000,
    }
  ]
}
