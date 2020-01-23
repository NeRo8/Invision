import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import LoadingStatus from '../../../components/LoadingStatus';

import styles from './styles';

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

const BackThread = ({ item, onPressDelete }) => (
  <View style={styles.rowBack}>
    <View style={styles.iconContainer}>
      <Icon
        name="md-trash"
        type="ionicon"
        color="white"
        size={32}
        onPress={() => onPressDelete(item.thread.pk)}
        underlayColor="transparent"
        underlayColor="transparent"
      />
    </View>
  </View>
);

const ItemTextPicker = ({ active, title, onPressItem }) => (
  <TouchableOpacity
    style={active ? styles.selectedElementActive : styles.selectedElement}
    onPress={() => onPressItem()}>
    <Text
      style={
        active ? styles.selectedTextElementActive : styles.selectedTextElement
      }>
      {title}
    </Text>
  </TouchableOpacity>
);

class ProfileNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: true,
    };
  }

  componentDidMount() {
    const { getAllThreads } = this.props;
    getAllThreads();
  }

  handlePressThread = pk => {
    const { navigation, updateLoading } = this.props;

    updateLoading(true);

    navigation.navigate('ProfileNotificationsChat', {
      threadId: pk,
    });
  };

  handlePressDelete = pk => {
    const { blockThreads } = this.props;

    blockThreads(pk);
  };

  loadMoreThreads = () => {
    const { setOldThreads, threadsConf } = this.props;

    if (threadsConf.next !== null) {
      setOldThreads(threadsConf.next);
    }
  };

  handlePressFilter = () => {
    const { filter } = this.state;

    this.setState({
      filter: !filter,
    });
  };

  getThreads = () => {
    const { threads } = this.props;
    const { filter } = this.state;

    if (!filter) {
      return threads.filter(item => item.thread.blocked === !filter);
    }

    return threads;
  };

  render() {
    const { filter } = this.state;
    const { threads, loading } = this.props;

    if (loading) {
      return <LoadingStatus />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.selectedContainer}>
          <ItemTextPicker
            title="All"
            active={filter}
            onPressItem={this.handlePressFilter}
          />
          <ItemTextPicker
            title="Archive"
            active={!filter}
            onPressItem={this.handlePressFilter}
          />
        </View>

        <SwipeListView
          data={this.getThreads()}
          renderItem={({ item }) => (
            <Thread item={item} onPressThread={this.handlePressThread} />
          )}
          renderHiddenItem={({ item }) => (
            <BackThread item={item} onPressDelete={this.handlePressDelete} />
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
