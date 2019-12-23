import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';

import { colors, globalStyles } from '../../../constants';

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

  handlePressSignUp = () => {
    const { data, checked } = this.state;
    const { createAccount } = this.props;

    if (!checked) {
      Alert.alert(
        'First agree Terms of Service',
        'For sign up, you must agree Terms of Service',
      );
    } else if (data.password !== data.confirm_password) {
      Alert.alert('Passwords not correct', 'Passwords not correct');
    } else {
      createAccount(data);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <ScrollView>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <Text style={[styles.SignUpText, globalStyles.gothamBook]}>
            Sign up
          </Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Input
              inputStyle={styles.Input}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="First & Last name"
              value={data.full_name}
              onChangeText={text => this.onChangeState('full_name', text)}
            />
            <Input
              autoCapitalize="none"
              inputStyle={styles.Input}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Email"
              value={data.email}
              onChangeText={text => this.onChangeState('email', text)}
            />
            <Input
              inputStyle={styles.Input}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Phone number"
              value={data.phone_number}
              onChangeText={text => this.onChangeState('phone_number', text)}
            />
            <Input
              secureTextEntry={true}
              inputStyle={styles.Input}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Password"
              value={data.password}
              onChangeText={text => this.onChangeState('password', text)}
            />
            <Input
              secureTextEntry={true}
              inputStyle={styles.Input}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Confirm password"
              value={data.confirm_password}
              onChangeText={text =>
                this.onChangeState('confirm_password', text)
              }
            />
            <Button
              title="Sign up"
              titleStyle={styles.title}
              buttonStyle={styles.btnSignUp}
              containerStyle={styles.btnContainer}
              onPress={this.handlePressSignUp}
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
                <Text style={[styles.textOfTerms, { color: colors.HEADER }]}>
                  Terms of Service
                </Text>{' '}
                &{' '}
                <Text style={[styles.textOfTerms, { color: colors.HEADER }]}>
                  Privacy Policy
                </Text>
                .
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
      </ScrollView>
    );
  }
}

export default SignUpScreen;
