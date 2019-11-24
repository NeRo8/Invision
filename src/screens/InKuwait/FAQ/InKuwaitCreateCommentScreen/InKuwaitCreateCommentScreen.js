import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  TextInput,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';
import styles from './styles';

class InKuwaitCommentScreen extends Component {
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
        <SafeAreaView style={styles.container}>
          <Input
            placeholder="Enter youre Full name"
            placeholderTextColor={colors.LABEL_GREY_COLOR}
            inputStyle={[globalStyles.gothamBook, styles.inputStyles]}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={{ marginTop: 25, paddingHorizontal: 0 }}
          />
          <Input
            placeholder="Enter your email address"
            placeholderTextColor={colors.LABEL_GREY_COLOR}
            inputStyle={[globalStyles.gothamBook, styles.inputStyles]}
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <View style={{ flex: 1, marginTop: 15 }}>
            <Input
              multiline
              placeholder="Enter description of your question"
              placeholderTextColor={colors.LABEL_GREY_COLOR}
              inputStyle={[
                globalStyles.gothamBook,
                styles.inputStyles,
                { textAlignVertical: 'top', paddingTop: 12 },
              ]}
              inputContainerStyle={[
                styles.inputContainerStyle,
                { height: '100%' },
              ]}
              containerStyle={{ paddingHorizontal: 0 }}
            />
          </View>
          <Button
            title="Send comment"
            titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
            buttonStyle={styles.btnStyle}
            containerStyle={{ marginTop: 25 }}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default InKuwaitCommentScreen;
