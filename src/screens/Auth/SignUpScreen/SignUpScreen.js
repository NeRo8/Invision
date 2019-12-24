import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import DropdownAlert from 'react-native-dropdownalert';

import { colors } from '../../../constants';

import { DefaultInput } from '../../../components/Inputs';
import { DefaultButton } from '../../../components/Buttons';

import { signUp } from '../../../api/auth';

import styles from './styles';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        full_name: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_password: '',
      },
      checked: false,
    };
  }

  onChangeState = (name, value) => {
    const newData = {
      ...this.state.data,
      [name]: value,
    };

    this.setState({
      data: newData,
    });
  };

  handlePressSignUp = async () => {
    const { data, checked } = this.state;

    if (!checked) {
      this.dropDownAlertRef.alertWithType(
        'warn',
        'Warn',
        'For sign up, you must agree Terms of Service',
      );
    } else if (data.password !== data.confirm_password) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Error',
        'Passwords not correct',
      );
    } else {
      await signUp(data).then(response => {
        this.dropDownAlertRef.alertWithType(
          response.type === 'success' ? 'success' : 'error',
          response.type === 'success' ? 'Success' : 'Error',
          response.msg,
        );
      });
    }
  };

  render() {
    const { data } = this.state;

    return (
      <ScrollView>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={styles.SignUpText}>Sign up</Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <DefaultInput
              placeholder="First & Last name"
              value={data.full_name}
              onChangeText={text => this.onChangeState('full_name', text)}
            />
            <DefaultInput
              placeholder="Email"
              value={data.email}
              onChangeText={text => this.onChangeState('email', text)}
            />
            <DefaultInput
              placeholder="Phone number"
              value={data.phone_number}
              onChangeText={text => this.onChangeState('phone_number', text)}
            />
            <DefaultInput
              secureTextEntry={true}
              placeholder="Password"
              value={data.password}
              onChangeText={text => this.onChangeState('password', text)}
            />
            <DefaultInput
              secureTextEntry={true}
              placeholder="Confirm password"
              value={data.confirm_password}
              onChangeText={text =>
                this.onChangeState('confirm_password', text)
              }
            />
            <DefaultButton
              title="Sign up"
              buttonStyle={{ marginHorizontal: 30, marginVertical: 20 }}
              onPressButton={this.handlePressSignUp}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 30,
              }}>
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.checked}
                containerStyle={styles.checkBox}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={styles.textOfTerms}>
                By Signing up you agree to our {'\n'}
                <Text style={styles.textLink}>Terms of Service</Text> &{' '}
                <Text style={styles.textLink}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.OrUseText}>
              Or use Sign in use social networks
            </Text>
            <View style={styles.btnSocialView}>
              <Button
                icon={{
                  name: 'facebook',
                  type: 'material-community',
                  color: 'white',
                  containerStyle: {},
                }}
                titleStyle={styles.title}
                buttonStyle={[
                  styles.btnSocial,
                  { backgroundColor: colors.FACEBOOK },
                ]}
                containerStyle={styles.btnSocialContainer}
              />
              <Button
                icon={{
                  name: 'twitter',
                  type: 'material-community',
                  color: 'white',
                }}
                titleStyle={styles.title}
                buttonStyle={[
                  styles.btnSocial,
                  { backgroundColor: colors.TWITTER },
                ]}
                containerStyle={styles.btnSocialContainer}
              />
              <Button
                icon={{
                  name: 'instagram',
                  type: 'material-community',
                  color: 'white',
                }}
                titleStyle={styles.title}
                buttonStyle={[
                  styles.btnSocial,
                  { backgroundColor: colors.INSTAGRAM },
                ]}
                containerStyle={styles.btnSocialContainer}
              />
            </View>
          </View>
        </View>
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
      </ScrollView>
    );
  }
}

export default SignUpScreen;
