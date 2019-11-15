import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class ProfileNotificationsChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { type: 'date', when: 'Today' },
        { date: '09:05 AM', type: 'me', message: 'Hello everyone' },
        {
          date: '10:20 AM',
          type: 'in',
          message: 'Hi Alex. How are you?',
          name: 'Pavlo Laptev',
        },
        { date: 'Sent', type: 'me', message: 'I`m fine. Thanks' },
      ],
      textMessage: '',
    };
  }

  renderDate = date => {
    return <Text style={styles.time}>{date}</Text>;
  };
  renderItem = ({ item }) => {
    if (item.type == 'date') {
      return (
        <View>
          <Text style={[globalStyles.gothamBook, styles.date]}>
            {item.when}
          </Text>
        </View>
      );
    } else if (item.type == 'me') {
      return (
        <View style={[styles.itemMe]}>
          <View style={[styles.balloon]}>
            <View style={styles.item}>
              <Text style={[globalStyles.gothamBook, styles.messageMe]}>
                {item.message}
              </Text>
            </View>
            <Text style={[globalStyles.gothamBook, styles.time]}>
              {item.date}
            </Text>
          </View>
        </View>
      );
    } else if (item.type == 'in') {
      return (
        <View>
          <View style={[styles.itemIn]}>
            <View style={[styles.balloon, { flexDirection: 'row' }]}>
              <Image
                source={require('../../../../assets/images/profilepic.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  alignSelf: 'flex-end',
                  marginRight: 15,
                }}
              />
              <View>
                <View style={styles.itemInName}>
                  <Text
                    style={[globalStyles.gothamBold, styles.messageInTitle]}>
                    {item.name}
                  </Text>
                </View>
                <View style={styles.messageIn}>
                  <Text style={[globalStyles.gothamBook, styles.messageMe]}>
                    {item.message}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={[globalStyles.gothamBook, styles.time]}>
              {item.date}
            </Text>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        style={styles.container}
        behavior="height"
        enabled>
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={this.state.data}
            ref={ref => (this.flatList = ref)}
            onContentSizeChange={() =>
              this.flatList.scrollToEnd({ animated: true })
            }
            onLayout={() => this.flatList.scrollToEnd({ animated: true })}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={this.renderItem}
          />
          <View style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[globalStyles.gothamBook, styles.inputs]}
                value={this.state.textMessage}
                onChangeText={textMessage => this.setState({ textMessage })}
                placeholder="Type something"
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity
              style={styles.btnSend}
              onPress={() => {
                if (this.state.textMessage != '') {
                  this.setState({
                    data: [
                      ...this.state.data,
                      {
                        date: '09:05 AM',
                        type: 'me',
                        message: this.state.textMessage,
                      },
                    ],
                  });
                }
                this.state.textMessage = '';
              }}>
              <Icon name="ios-send" type="ionicon" color="white" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default ProfileNotificationsChat;
