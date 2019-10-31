import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Input } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

class HeaderInKuwaitNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            containerStyle={{ marginLeft: -10 }}
            name="chevron-left"
            type="feather"
            color="white"
            size={32}
            onPress={() => this.props.onPressBack()}
          />
          <Text style={styles.headerText}>News</Text>
          <Icon
            name="filter"
            type="material-community"
            color="white"
            onPress={() => this.props.onPressFilter()}
          />
        </View>
        <View style={styles.bodyBlock}>
          <Input
            leftIcon={() => (
              <Icon
                name="ios-search"
                type="ionicon"
                color={colors.UNACTIVE}
                size={24}
              />
            )}
            placeholder="Search news"
            inputStyle={[
              globalStyles.gothamBook,
              { fontSize: 15, lineHeight: 20, fontWeight: '300' },
            ]}
            placeholderTextColor={colors.UNACTIVE}
            leftIconContainerStyle={styles.leftIconContainer}
            inputContainerStyle={styles.inputContainerS}
            containerStyle={styles.inputContainer}
          />
        </View>
      </View>
    );
  }
}

export default HeaderInKuwaitNews;
