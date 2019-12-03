import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      leftIcon = null,
      rightIcon = null,
      title,
      onPressLeftIcon,
      onPressRightIcon,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftIcon}>
          {leftIcon === null ? null : (
            <Icon
              name="chevron-left"
              type="feather"
              size={32}
              color="white"
              underlayColor="transparent"
              containerStyle={styles.leftIcon}
              onPress={() => onPressLeftIcon()}
            />
          )}
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightIcon}>{rightIcon}</View>
      </View>
    );
  }
}

export default DefaultHeader;
