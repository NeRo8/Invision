import React, { Component } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';

import ModalSuccess from './ModalSuccess';

import styles from './styles';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handlePressShowModal = show => {
    if (show) {
      this.setState({
        showModal: show,
      });
    } else {
      this.setState({
        showModal: show,
      });
      this.props.navigation.navigate('NewPassword');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView style={styles.container}>
          <View style={styles.containerForm}>
            <Text style={[globalStyles.gothamBook, { fontSize: 24 }]}>
              Forgot Password?
            </Text>
            <Text style={[globalStyles.gothamBook, styles.fontHint]}>
              Enter your email and we will send you access
            </Text>
            <Input
              placeholder="Email*"
              inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
              containerStyle={styles.containerInput}
            />
            <Button
              title="Send password"
              titleStyle={[
                globalStyles.gothamBold,
                { fontSize: 15, color: 'white' },
              ]}
              buttonStyle={styles.btnStyles}
              containerStyle={{ marginTop: 35 }}
              onPress={() => this.handlePressShowModal(true)}
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
