import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';
import styles from './styles';

class NewPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SafeAreaView style={styles.container}>
          <View style={styles.containerForm}>
            <Text style={[globalStyles.gothamBook, { fontSize: 24 }]}>
              Change your password
            </Text>
            <Text style={[globalStyles.gothamBook, styles.fontHint]}>
              Enter youre new password and confirm it
            </Text>
            <Input
              secureTextEntry
              label="New password*"
              labelStyle={[globalStyles.gothamBook, styles.labelInput]}
              inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
              containerStyle={styles.containerInput}
            />
            <Input
              secureTextEntry
              label="Repeat new password*"
              labelStyle={[globalStyles.gothamBook, styles.labelInput]}
              inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
              containerStyle={styles.containerInput}
            />
            <Button
              title="Change password"
              titleStyle={[
                globalStyles.gothamBold,
                { fontSize: 15, color: 'white' },
              ]}
              buttonStyle={styles.btnStyles}
              containerStyle={{ marginTop: 35 }}
              onPress={() => this.props.navigation.navigate('SignIn')}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default NewPasswordScreen;
