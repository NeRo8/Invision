import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

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
          <View style={{ justifyContent: 'flex-end', marginBottom: 10 }}>
            {message.sender_avatar !== null ? (
              <Image
                source={{ uri: message.sender_avatar }}
                style={styles.avatar}
              />
            ) : (
              <Icon name="ios-person" type="ionicon" color="silver" />
            )}
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={styles.messageMyIncome}>
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
