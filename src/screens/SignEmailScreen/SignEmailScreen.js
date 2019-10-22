import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';

class SignEmailScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Sign in</Text>
        </View>
        <View>
          <Input placeholder="Email address*" />
          <Input placeholder="Password*" />
        </View>
      </View>
    );
  }
}

export default SignEmailScreen;
