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
  ActivityIndicator,
} from 'react-native';
import { Icon, colors } from 'react-native-elements';
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
    const { getAllMessages, navigation, token, setNewMessage } = this.props;

    const id = navigation.getParam('threadId', null);
    getAllMessages(id);

    this.ws = new WebSocket(`wss://staging.masaha.app/chat/1/?token=${token}`);

    //Коли відкрився мост
    this.ws.onopen = () => {
      console.log('socket connection opened');
    };

    //Події на мосту
    this.ws.onmessage = e => {
      setNewMessage(JSON.parse(e.data));
    };

    this.ws.onerror = e => {
      // an error occurred
      console.log('error.message', e);
    };

    this.ws.onclose = e => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  render() {
    const { messages, user, loading } = this.props;
    const { textMessage } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" color="blue" />;
    }
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        style={styles.container}
        behavior="padding">
        <FlatList
          ref={ref => (this.flatList = ref)}
          data={messages}
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
          <TouchableOpacity
            style={styles.btnSend}
            onPress={() =>
              this.ws.send(JSON.stringify({ message: textMessage }))
            }>
            <Icon name="ios-send" type="ionicon" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default ProfileNotificationsChat;
