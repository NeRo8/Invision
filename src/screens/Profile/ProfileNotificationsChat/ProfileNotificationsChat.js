import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Platform,
  SafeAreaView,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { message, userId } = this.props;

    if (message.sender === userId) {
      return (
        <View style={styles.blockMessage}>
          <View>
            <View style={styles.messageMy}>
              <Text style={styles.messages}>{message.message}</Text>
            </View>
            <Text style={styles.time}>
              {moment(message.sent_at).format('HH:MM')}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.blockMessageIncome}>
          <View>
            <View style={styles.messageMy}>
              <Text style={styles.senderName}>{message.sender_name}</Text>
              <Text style={styles.messages}>{message.message}</Text>
            </View>
            <Text style={styles.timeIncome}>
              {moment(message.sent_at).format('HH:MM')}
            </Text>
          </View>
        </View>
      );
    }
  }
}

class ProfileNotificationsChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textMessage: null,
    };
  }

  componentDidMount() {
    const { getAllMessages, navigation } = this.props;

    const id = navigation.getParam('threadId', null);
    getAllMessages(id);
  }

  render() {
    const { messages, user } = this.props;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        style={styles.container}
        behavior="padding">
        <FlatList
          ref={ref => (this.flatList = ref)}
          data={messages.reverse()}
          renderItem={({ item }) => <Message message={item} userId={user} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          onContentSizeChange={() =>
            this.flatList.scrollToEnd({ animated: true })
          }
          onLayout={() => this.flatList.scrollToEnd({ animated: true })}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              value={this.state.textMessage}
              onChangeText={textMessage => this.setState({ textMessage })}
              placeholder="Type something"
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity style={styles.btnSend} onPress={() => {}}>
            <Icon name="ios-send" type="ionicon" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default ProfileNotificationsChat;
