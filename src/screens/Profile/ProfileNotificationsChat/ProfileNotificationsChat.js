import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Message from './components/Message';
import LoadingStatus from '../../../components/LoadingStatus';

import styles from './styles';

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

    console.log(`wss://staging.masaha.app/chat/${id}/?token=${token}`);
    this.ws = new WebSocket(
      `wss://staging.masaha.app/chat/${id}/?token=${token}`,
    );

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
      console.log('Socket close', e.code, e.reason);
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

  nextMessage = () => {
    const { loadMoreMessages, messagesConf } = this.props;

    if (messagesConf.next !== null) {
      loadMoreMessages(messagesConf.next);
    }
  };

  handlePressSend = () => {
    const { textMessage } = this.state;
    this.ws.send(JSON.stringify({ message: textMessage }));
  };

  render() {
    const { messages, user, loading } = this.props;
    if (loading) {
      return <LoadingStatus />;
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : -500}>
        <FlatList
          inverted
          ref={ref => (this.flatList = ref)}
          data={messages}
          renderItem={({ item }) => <Message message={item} userId={user} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.nextMessage}
          onEndReachedThreshold={0.1}
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
            onPress={this.handlePressSend}>
            <Icon name="ios-send" type="ionicon" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default ProfileNotificationsChat;
