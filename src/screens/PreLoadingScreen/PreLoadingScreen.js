import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

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

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.HEADER} />
      </View>
    );
  }
}

export default PreLoadingScreen;
