import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Input } from 'react-native-elements';

import { DefaultButton } from '../../../components/Buttons';

import styles from './styles';

class CreateCommentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <View style={styles.container}>
          <Input
            placeholder="Enter youre Full name"
            inputStyle={styles.inputStyles}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inputContainer}
          />
          <Input
            placeholder="Enter your email address"
            inputStyle={styles.inputStyles}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inputContainer}
          />
          <View style={{ flex: 1, paddingVertical: 15 }}>
            <Input
              multiline
              placeholder="Enter description of your question"
              inputStyle={styles.textField}
              inputContainerStyle={styles.textContainerStyle}
              containerStyle={{ paddingHorizontal: 0 }}
            />
          </View>

          <DefaultButton title="Send comment" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default CreateCommentScreen;
