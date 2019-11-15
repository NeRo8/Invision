import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { withNavigation } from 'react-navigation';
import globalStyles from '../../../constants/globalStyles';
import styles from './styles';
import { Icon } from 'react-native-elements';

// import Images from '../../../assets/images';

var swipeoutBtns = [
  {
    text: 'Button',
  },
];

class ProfileNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
        {
          name: 'Pavlo Laptiev',
          message: 'Hello Alex. How are you?',
          when: 'Today',
        },
      ],
      Archive: true,
      All: false,
    };
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
          style={styles.containerSwipe}
          disableRightSwipe={true}
          data={this.state.categoryList}
          renderItem={(rowData, rowMap) => (
            <TouchableOpacity
              style={styles.rowFront}
              onPress={() =>
                this.props.navigation.navigate('ProfileNotificationsChat')
              }>
              <Image
                source={require('../../../../assets/images/profilepic.jpg')}
                style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={[globalStyles.gothamBook, styles.name]}>
                  {rowData.item.name}{' '}
                </Text>
                <Text style={[globalStyles.gothamBook, styles.message]}>
                  {rowData.item.message}
                </Text>
              </View>
              <Text style={[globalStyles.gothamBook, styles.when]}>
                {rowData.item.when}
              </Text>
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
          previewRowKey={this.state.categoryList[0].key}
        />
      </View>
    );
  }
}

export default withNavigation(ProfileNotifications);
