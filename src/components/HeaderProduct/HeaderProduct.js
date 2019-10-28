import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

class HeaderProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            name="chevron-left"
            type="material-community"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View>
          <Icon
            name="flag-outline"
            type="material-community"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon name="heart-outline" type="material-community" color="white" />
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderProduct);
