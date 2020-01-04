import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

import styles from './styles';

import { setToken } from '../../../api';
import { colors } from '../../../constants';

const Thread = ({ item, onPressThread }) => (
  <TouchableOpacity
    style={styles.rowFront}
    onPress={() => onPressThread(item.thread.pk)}>
    <Image source={{ uri: item.thread.primary_image }} style={styles.avatar} />
    <View style={{ flex: 2 }}>
      <Text style={styles.name}>{item.thread.ad_title.slice(0, 20)} ...</Text>
      <Text style={styles.message}>{item.thread.message}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.when}>
        {item.thread.sent_at.replace(', ', ',\n')}
      </Text>
    </View>
  </TouchableOpacity>
);

const BackThread = ({ onPress }) => (
  <View style={styles.rowBack}>
    <View style={styles.iconContainer}>
      <Icon
        name="md-trash"
        type="ionicon"
        color="white"
        size={32}
        onPress={() => onPress()}
        underlayColor="transparent"
      />
    </View>
  </View>
);

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

  handlePressThread = pk => {
    const { navigation, updateLoading } = this.props;

    updateLoading(true);

    navigation.navigate('ProfileNotificationsChat', {
      threadId: pk,
    });
  };

  handlePressDelete = pk => {};

  loadMoreThreads = () => {
    const { setOldThreads, threadsConf } = this.props;

    if (threadsConf.next !== null) {
      setOldThreads(threadsConf.next);
    }
  };

  render() {
    const { Archive, All } = this.state;
    const { threads, loading } = this.props;

    if (loading) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={colors.HEADER} />
        </View>
      );
    }

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
          renderItem={({ item }) => (
            <Thread item={item} onPressThread={this.handlePressThread} />
          )}
          renderHiddenItem={({ item }) => (
            <BackThread item={item} onPress={this.handlePressDelete} />
          )}
          disableRightSwipe={true}
          rightOpenValue={-75}
          onEndReached={this.loadMoreThreads}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

export default ProfileNotifications;
