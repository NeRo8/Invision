import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  TextInput,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';

class NewsCreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
    };
  }

  handlePressSendComment = () => {
    const { navigation, news, createComment, token } = this.props;
    const { comment } = this.state;

    const id = navigation.getParam('id', null);

    const newData = {
      article: news.pk,
      parent: id !== null ? id : null,
      description: comment,
    };

    if (comment !== '' && comment !== null) {
      createComment(newData, token);
    }
  };

  render() {
    const { user } = this.props;
    const { comment } = this.state;

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Input
              placeholder="Enter youre Full name"
              inputStyle={[globalStyles.gothamBook, styles.inputStyles]}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={{ marginTop: 25, paddingHorizontal: 0 }}
              value={
                user !== null
                  ? `${user.user.first_name} ${user.user.last_name}`
                  : ''
              }
            />
            <Input
              placeholder="Enter your email address"
              inputStyle={[globalStyles.gothamBook, styles.inputStyles]}
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputContainerStyle}
              value={user !== null ? `${user.user.email}` : ''}
            />
            <View style={{ flex: 1, marginTop: 15 }}>
              <Input
                multiline
                placeholder="Enter description of your question"
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
                value={comment}
                onChangeText={text => this.setState({ comment: text })}
              />
            </View>
            <Button
              title="Send comment"
              titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
              buttonStyle={styles.btnStyle}
              containerStyle={{ marginTop: 25 }}
              onPress={this.handlePressSendComment}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default NewsCreateComment;
