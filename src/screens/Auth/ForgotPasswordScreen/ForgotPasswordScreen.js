import React, { Component } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import globalStyles from '../../../constants/globalStyles';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
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
              placeholder="Password"
              inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
              inputContainerStyle={{ marginTop: 70 }}
              containerStyle={{ paddingHorizontal: 0 }}
            />
            <Button
              title="Send password"
              titleStyle={[
                globalStyles.gothamBold,
                { fontSize: 15, color: 'white' },
              ]}
              buttonStyle={{ height: 50 }}
              containerStyle={{ marginTop: 35 }}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default ForgotPasswordScreen;
