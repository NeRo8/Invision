import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Input } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

class HeaderInKuwaitEvents extends Component {
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
            type="feather"
            color="white"
            underlayColor="transparent"
            size={32}
            onPress={() => this.props.onPressBack()}
          />
          <Text style={[globalStyles.gothamBold, styles.headerText]}>
            Events
          </Text>
          <Icon
            name="filter"
            type="material-community"
            color="white"
            underlayColor="transparent"
            onPress={() =>
              this.props.navigation.navigate('InKuwaitEventsFilter')
            }
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
            leftIconContainerStyle={styles.leftIconContainer}
            placeholder="Search event..."
            placeholderTextColor={colors.UNACTIVE}
            inputStyle={[globalStyles.gothamBook, { fontSize: 15 }]}
            inputContainerStyle={styles.inputContainerS}
            containerStyle={styles.inputContainer}
          />
        </View>
      </View>
    );
  }
}

export default HeaderInKuwaitEvents;
