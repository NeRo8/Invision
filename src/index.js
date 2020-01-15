import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import ErrorComponent from './components/ErrorComponent';

import AppNavigation from './navigation';

import { store, persistor } from './redux/store';

const App = () => (
  <Provider store={store}>
    <ErrorComponent>
      <PersistGate
        loading={<ActivityIndicator size="large" color="blue" />}
        persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </ErrorComponent>
  </Provider>
);

export default App;
