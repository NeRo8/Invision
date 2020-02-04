import React, { Component } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

import { DefaultButton } from '../../../components/Buttons';
import ModalSuccess from './ModalSuccess';

import styles from './styles';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showModal: false,
    };
  }

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handlePressSend = () => {
    const { email } = this.state;
    const { resetPassword } = this.props;
    if (email.length !== 0) {
      resetPassword(email);
    }
    this.setState({
      showModal: true,
    });
  };

  onPressSubmit = () => {
    const { navigation } = this.props;
    this.onChangeState('showModal', false);
    navigation.navigate('Home');
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView style={styles.container}>
          <View style={styles.containerForm}>
            <Text style={styles.headerText}>Forgot Password?</Text>
            <Text style={styles.fontHint}>
              Enter your email and we will send you access
            </Text>
            <Input
              autoCapitalize="none"
              placeholder="Email*"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerInput}
              onChangeText={text => this.onChangeState('email', text)}
            />
            <DefaultButton
              title="SendPassword"
              onPressButton={this.handlePressSend}
            />
          </View>
          <ModalSuccess
            email={this.state.email}
            show={this.state.showModal}
            onPressSubmit={this.onPressSubmit}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default ForgotPasswordScreen;
