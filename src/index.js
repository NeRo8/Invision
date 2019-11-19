import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './navigation';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
