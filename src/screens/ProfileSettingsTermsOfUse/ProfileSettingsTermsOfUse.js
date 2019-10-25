
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import globalStyles from '../../constants/globalStyles';

import styles from './styles';

class ProfileSettingsPrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{
                flex:1,
                marginTop: 10, marginLeft: 15,
                marginRight: 15, flexDirection:'column'
            }}>
                <Text style={[globalStyles.gothamMediumRegular, styles.privacyPolicy]}>
                    1. Lorem ipsum
                    </Text>
                <Text style={[globalStyles.gothamBook, styles.privacyPolicyText]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
            </View>
        );
    }
}

export default withNavigation(ProfileSettingsPrivacyPolicy);