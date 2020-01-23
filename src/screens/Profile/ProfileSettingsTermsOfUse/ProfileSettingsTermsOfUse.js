import React, { Component } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../../constants/globalStyles';
import { Icon } from 'react-native-elements';

import { colors } from '../../../constants';
import styles from './styles';

class ProfileSettingsPrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          flexDirection: 'column',
        }}>
        <Text style={[globalStyles.gothamMediumRegular, styles.privacyPolicy]}>
          1. Lorem ipsum
        </Text>
        <Text style={[globalStyles.gothamBook, styles.privacyPolicyText]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="ios-checkmark-circle-outline"
            type="ionicon"
            color={colors.HEADER}
            underlayColor="transparent"
            containerStyle={{ marginTop: 20 }}
          />
          <Text
            style={[globalStyles.gothamBook, styles.privacyPolicySmallText]}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing.
          </Text>
        </View>
      </View>
    );
  }
}

export default ProfileSettingsPrivacyPolicy;
