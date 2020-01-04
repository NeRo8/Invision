import React, { Component } from 'react';
import { View, Text } from 'react-native';

import moment from 'moment';

import styles from './styles';

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

export default Message;
