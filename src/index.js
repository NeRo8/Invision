import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import AppNavigation from './navigation';

import { store, persistor } from './redux/store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" translucent />
    <PersistGate
      loading={<ActivityIndicator size="large" color="blue" />}
      persistor={persistor}>
      <AppNavigation />
    </PersistGate>
  </Provider>
);

export default App;
