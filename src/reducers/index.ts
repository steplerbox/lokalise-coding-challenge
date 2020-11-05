import { combineReducers } from 'redux';
import languages from './languages';

const rootReducer = combineReducers({
  languages
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
