import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

import { IconInput } from '../../../components/Inputs';
import { DefaultButton } from '../../../components/Buttons';
import DropdownAlert from 'react-native-dropdownalert';

import { changePassword } from '../../../api/users';

import styles from './styles';

import { colors } from '../../../constants';

class ProfileSettingsChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      o_password: null,
      n_password: null,
      pValid: true,
    };
  }

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onCheckPasswords = password => {
    const { n_password } = this.state;

    if (password === '') {
      this.setState({
        pValid: true,
      });
    } else if (n_password === password) {
      this.setState({
        pValid: true,
      });
    } else if (n_password !== password) {
      this.setState({
        pValid: false,
      });
    }
  };

  handlePressSave = () => {
    const { n_password, o_password, pValid } = this.state;
    const { token } = this.props;

    if (pValid) {
      changePassword(
        { new_password: n_password, old_password: o_password },
        token,
      ).then(res => {
        if (res.error) {
          this.dropDownAlertRef.alertWithType('error', 'Error', res.msg);
        } else {
          this.dropDownAlertRef.alertWithType('success', 'Success', res.msg);
        }
      });
    } else {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Error',
        'Passwords did not match',
      );
    }
  };

  render() {
    const { o_password, n_password, pValid } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <IconInput
            secureTextEntry
            label="Current Password*"
            iconName="md-key"
            placeholder="Current Password"
            value={o_password}
            onChangeText={text => this.onChangeState('o_password', text)}
          />
          <IconInput
            secureTextEntry
            label="New Password*"
            iconName="md-key"
            placeholder="New Password"
            value={n_password}
            onChangeText={text => this.onChangeState('n_password', text)}
          />
          <IconInput
            secureTextEntry
            label="Confirm password*"
            iconName="md-key"
            placeholder="Confirm password"
            inputContainerStyle={
              !pValid
                ? { borderColor: 'red' }
                : { borderColor: colors.BORDER_COLOR }
            }
            onChangeText={text => this.onCheckPasswords(text)}
          />
          <DefaultButton title="Save" onPressButton={this.handlePressSave} />
          <DropdownAlert
            ref={ref => (this.dropDownAlertRef = ref)}
            updateStatusBar={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileSettingsChangePassword;
