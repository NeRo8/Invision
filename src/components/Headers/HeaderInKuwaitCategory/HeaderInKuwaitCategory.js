import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { colors } from '../../../constants';

import styles from './styles';

class HeaderInKuwaitCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      leftIcon = null,
      onPressLeftIcon,
      rightIcon = null,
      title,
      onSearchQuery = null,
      onSubmitQuery = null,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.minContainer}>
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
        <View style={styles.minBottomContainer}>
          <Input
            leftIcon={() => (
              <Icon
                name="ios-search"
                type="ionicon"
                color={colors.UNACTIVE}
                size={24}
              />
            )}
            leftIconContainerStyle={styles.leftIconContainer}
            placeholder={`Search ${title}...`}
            placeholderTextColor={colors.UNACTIVE}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inputContainer}
            onChangeText={text => onSearchQuery(text)}
            onSubmitEditing={() => onSubmitQuery()}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderInKuwaitCategory);
