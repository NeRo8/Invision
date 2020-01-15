import React, { Component } from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import styles from './styles';

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    const { error, clearError } = this.props;

    console.log('ERROR', error);
    if (error !== null) {
      this.dropDownAlertRef.alertWithType('error', 'Error', error);
      clearError();
    }
  }

  render() {
    const { children } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {children}
        <DropdownAlert
          ref={ref => (this.dropDownAlertRef = ref)}
          updateStatusBar={false}
        />
      </View>
    );
  }
}

export default ErrorComponent;
