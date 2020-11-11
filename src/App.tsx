import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './GlobalStyle';
import store from './store';
import Languages from './containers/Languages';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Languages/>
    </Provider>
  );
};

export default App;
