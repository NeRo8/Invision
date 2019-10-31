import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';
import styles from './styles';

class PayCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Icon
            name="ios-camera"
            type="ionicon"
            color="white"
            size={48}
            containerStyle={styles.iconContainer}
            onPress={() => {}}
          />

          <Text style={[globalStyles.gothamBook, styles.textHint]}>
            Take a photo of your card
          </Text>
        </View>
      </View>
    );
  }
}

export default PayCardScreen;
