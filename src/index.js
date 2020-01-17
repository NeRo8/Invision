import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import ErrorComponent from './components/ErrorComponent';

import AppNavigation from './navigation';

import { store, persistor } from './redux/store';
import setI18nConfig from './i18n';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    setI18nConfig();
  }

  render() {
    return (
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
  }
}

export default App;
