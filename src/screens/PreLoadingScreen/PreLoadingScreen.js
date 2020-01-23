import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { withNavigationFocus } from 'react-navigation';

import { colors } from '../../constants';
import styles from './styles';

class PreLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { authStatus, refreshToken, navigation } = this.props;

    SplashScreen.hide();
    if (authStatus) {
      refreshToken();
      navigation.navigate('Main');
    } else {
      navigation.navigate('Main');
    }
  }

  componentDidUpdate() {
    const { isFocused, navigation } = this.props;

    {
      isFocused ? navigation.navigate('Main') : null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.HEADER} />
      </View>
    );
  }
}

export default withNavigationFocus(PreLoadingScreen);
