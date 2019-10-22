import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class HeaderAdsFilters extends Component {
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
          <Text style={styles.headerText}>Add ad</Text>
        </View>
        <View style={styles.bodyBlock}>
          <Button></Button>
          <Button></Button>
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderAdsFilters);
