import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import globalStyles from '../../../constants/globalStyles';
import ModalSuccess from './ModalSuccess';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handlePressShowModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <StatusBar translucent barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ paddingHorizontal: 30 }}>
            <Text style={[globalStyles.gothamBook, { fontSize: 24 }]}>
              Forgot Password?
            </Text>
            <Text
              style={[
                globalStyles.gothamBook,
                { fontSize: 14, marginTop: 20 },
              ]}>
              Enter your email and we will send you access
            </Text>
            <Input
              label="Password*"
              labelStyle={[
                globalStyles.gothamBook,
                { fontSize: 17, fontWeight: '100' },
              ]}
              inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
              containerStyle={{ paddingHorizontal: 0, marginTop: 70 }}
            />
            <Button
              title="Send password"
              titleStyle={[
                globalStyles.gothamBold,
                { fontSize: 15, color: 'white' },
              ]}
              buttonStyle={{ height: 50 }}
              containerStyle={{ marginTop: 35 }}
              onPress={() => this.handlePressShowModal()}
            />
          </View>
          <ModalSuccess
            show={this.state.showModal}
            onPressSubmit={this.handlePressShowModal}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default ForgotPasswordScreen;
