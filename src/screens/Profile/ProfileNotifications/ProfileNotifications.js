import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

import styles from './styles';

import { setToken } from '../../../api';

var swipeoutBtns = [
  {
    text: 'Button',
  },
];

class ProfileNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      Archive: true,
      All: false,
    };
  }

  componentDidMount() {
    const { token, getAllThreads } = this.props;
    //SET TOKEN TO AXIOS
    setToken(token);

    getAllThreads();
  }

  handlePressSelectedView = name => {
    this.setState({
      Archive: false,
      All: false,
      [name]: true,
    });
  };

  render() {
    const { Archive, All } = this.state;
    const { navigation, threads, updateLoading } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.selectedContainer}>
          <TouchableOpacity
            style={
              Archive ? styles.selectedElementActive : styles.selectedElement
            }
            onPress={() => this.handlePressSelectedView('Archive')}>
            <Text
              style={
                Archive
                  ? styles.selectedTextElementActive
                  : styles.selectedTextElement
              }>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={All ? styles.selectedElementActive : styles.selectedElement}
            onPress={() => this.handlePressSelectedView('All')}>
            <Text
              style={
                All
                  ? styles.selectedTextElementActive
                  : styles.selectedTextElement
              }>
              Archive
            </Text>
          </TouchableOpacity>
        </View>
        <SwipeListView
          data={threads}
          style={styles.containerSwipe}
          disableRightSwipe={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.rowFront}
              onPress={() => {
                updateLoading();
                navigation.navigate('ProfileNotificationsChat', {
                  threadId: item.thread.pk,
                });
              }}>
              <Image
                source={{ uri: item.thread.primary_image }}
                style={styles.avatar}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.name}>
                  {item.thread.ad_title.slice(0, 20)} ...
                </Text>
                <Text style={styles.message}>{item.thread.message}</Text>
              </View>
              <Text style={styles.when}>{item.thread.sent_at}</Text>
            </TouchableOpacity>
          )}
          renderHiddenItem={(data, rowMap) => (
            <TouchableOpacity style={styles.rowBack}>
              <View />
              <Icon
                name="md-trash"
                type="ionicon"
                color="white"
                containerStyle={{ marginHorizontal: 30 }}
              />
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
        />
      </View>
    );
  }
}

export default ProfileNotifications;
