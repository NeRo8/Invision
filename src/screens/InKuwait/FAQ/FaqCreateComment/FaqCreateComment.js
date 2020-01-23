import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import { DefaultButton } from '../../../../components/Buttons';
import { SmallInput, LargeInput } from '../../../../components/Inputs';

import { colors } from '../../../../constants';
import styles from './styles';

class FaqCreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  handlePressSendComment = () => {
    const { sendComment, user, questionId, navigation } = this.props;
    const { description } = this.state;

    const parent = navigation.getParam('parent', null);

    const data = {
      question: questionId,
      parent: parent,
      author_full_name: `${user.first_name} ${user.last_name}`,
      author_email: `${user.email}`,
      description: description,
    };

    sendComment(data);
  };

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { user } = this.props;

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : -500}>
        <View style={styles.container}>
          <SmallInput
            placeholder={`${user.first_name} ${user.last_name}`}
            placeholderTextColor={colors.LABEL_GREY_COLOR}
          />
          <SmallInput
            placeholder={user.email}
            placeholderTextColor={colors.LABEL_GREY_COLOR}
          />
          <LargeInput
            multiline
            placeholder="Enter description of your question"
            placeholderTextColor={colors.LABEL_GREY_COLOR}
            onChangeText={text => this.onChangeState('description', text)}
          />

          <DefaultButton
            title="Send comment"
            onPressButton={this.handlePressSendComment}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default FaqCreateComment;
