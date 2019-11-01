import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';

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
            containerStyle={styles.icons}
            name="chevron-left"
            type="feather"
            underlayColor="transparent"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={styles.rightBlock}>
          <Icon
            containerStyle={styles.icons}
            name="flag-outline"
            type="material-community"
            color="white"
            size={26}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon
            containerStyle={styles.icons}
            name="share-apple"
            type="evilicon"
            color="white"
            size={32}
            onPress={() => this.props.onPressShere()}
          />
          <Icon
            containerStyle={styles.icons}
            name="heart-outline"
            type="material-community"
            color="white"
            size={24}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderProduct);
