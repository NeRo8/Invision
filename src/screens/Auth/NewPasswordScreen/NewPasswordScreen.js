import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { DefaultButton } from '../../../components/Buttons';

import globalStyles from '../../../constants/globalStyles';
import styles from './styles';

class NewPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressSubmit = () => {
    const { navigation } = this.props;

    navigation.navigate('SignIn');
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SafeAreaView style={styles.container}>
          <View style={styles.containerForm}>
            <Text style={styles.headerText}>Change your password</Text>
            <Text style={styles.underHeaderText}>
              Enter youre new password and confirm it
            </Text>
            <Input
              secureTextEntry
              label="New password*"
              labelStyle={styles.labelInput}
              inputStyle={styles.inputStyles}
              containerStyle={styles.containerInput}
            />
            <Input
              secureTextEntry
              label="Repeat new password*"
              labelStyle={styles.labelInput}
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerInput}
            />

            <DefaultButton
              title="Change password"
              onPressButton={this.handlePressSubmit}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default NewPasswordScreen;
