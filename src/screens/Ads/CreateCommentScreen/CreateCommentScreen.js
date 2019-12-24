import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

import { DefaultButton } from '../../../components/Buttons';
import { SmallInput, LargeInput } from '../../../components/Inputs';

import styles from './styles';

class CreateCommentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handlePressSendComment = () => {
    const { token, adId, createComment } = this.props;
    const { comment } = this.state;

    const newData = {
      ad: adId,
      description: comment,
    };

    if (comment !== '' && comment !== null) {
      createComment(newData, token);
    }
  };

  render() {
    const { user } = this.props;
    const { comment } = this.state;

    const fullName = `${user.user.first_name} ${user.user.last_name}`;
    const email = `${user.user.email}`;

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <SmallInput placeholder="Enter youre Full name" value={fullName} />
            <SmallInput placeholder="Enter your email address" value={email} />
            <LargeInput
              placeholder="Enter description of your question"
              value={comment}
              onChangeText={text => this.setState({ comment: text })}
            />
            <DefaultButton
              title="Send comment"
              onPressButton={this.handlePressSendComment}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default CreateCommentScreen;
