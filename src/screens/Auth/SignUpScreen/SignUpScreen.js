import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import DropdownAlert from 'react-native-dropdownalert';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

import { colors } from '../../../constants';

import { DefaultInput } from '../../../components/Inputs';
import { DefaultButton } from '../../../components/Buttons';

import { signUp } from '../../../api/auth';

import styles from './styles';

import { translate } from '../../../i18n';

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
      this.props.navigation.goBack();
    }
  };

  render() {
    const { data } = this.state;

    return (
      <KeyboardAvoidingScrollView>
        <Text style={styles.SignUpText}>{translate('signUp')}</Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <DefaultInput
            placeholder={translate('firstLastName')}
            value={data.full_name}
            onChangeText={text => this.onChangeState('full_name', text)}
          />
          <DefaultInput
            placeholder={translate('email')}
            value={data.email}
            onChangeText={text => this.onChangeState('email', text)}
          />
          <DefaultInput
            placeholder={translate('phoneNumber')}
            value={data.phone_number}
            onChangeText={text => this.onChangeState('phone_number', text)}
          />
          <DefaultInput
            secureTextEntry={true}
            placeholder={translate('password')}
            value={data.password}
            onChangeText={text => this.onChangeState('password', text)}
          />
          <DefaultInput
            secureTextEntry={true}
            placeholder={translate('confirmNewPassword')}
            value={data.confirm_password}
            onChangeText={text => this.onChangeState('confirm_password', text)}
          />
          <DefaultButton
            title={translate('signUp')}
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
              {translate('bySigningUpYouAgree')} {'\n'}
              <Text style={styles.textLink}>
                {translate('termsOfService')}
              </Text>{' '}
              & <Text style={styles.textLink}>{translate('termsOfUse')}</Text>.
            </Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.OrUseText}>{translate('signInUseSocials')}</Text>
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

        <DropdownAlert
          ref={ref => (this.dropDownAlertRef = ref)}
          updateStatusBar={false}
        />
      </KeyboardAvoidingScrollView>
    );
  }
}

export default SignUpScreen;
