import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';
import { colors } from '../../../../constants/colors';

const ElementFlatList = ({ item, onPressElement }) => (
  <TouchableOpacity style={styles.elementFL} onPress={() => onPressElement()}>
    <View style={styles.roundView}>
      <Text style={[globalStyles.gothamBook, styles.roundText]}>
        {item.size}
      </Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={[globalStyles.gothamBook, styles.textElement]}>
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
);

class InKuwaitFAQScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          size: 40,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
        {
          id: 2,
          size: 15,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
        {
          id: 3,
          size: 25,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
        {
          id: 4,
          size: 35,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
        {
          id: 5,
          size: 15,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
        {
          id: 6,
          size: 5,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
        {
          id: 7,
          size: 50,
          title: 'Lorem Ipsum is simply dummy text of the printing',
        },
      ],
      filters: {
        topQuestion: true,
        recentQuestion: false,
      },
    };
  }

  handleChangeFilter = name => {
    this.setState({
      filters: {
        topQuestion: false,
        recentQuestion: false,
        [name]: true,
      },
    });
  };

  handlePressElement = () => {
    this.props.navigation.navigate('InKuwaitDetail');
  };

  render() {
    const { filters } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TouchableOpacity
            onPress={() => {
              this.handleChangeFilter('topQuestion');
            }}
            style={
              filters.topQuestion
                ? styles.selectBlockActive
                : styles.selectBlock
            }>
            <Text
              style={[
                globalStyles.gothamMediumRegular,
                filters.topQuestion ? styles.textActive : styles.textUnactive,
              ]}>
              Top Questions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.handleChangeFilter('recentQuestion');
            }}
            style={
              filters.recentQuestion
                ? styles.selectBlockActive
                : styles.selectBlock
            }>
            <Text
              style={[
                globalStyles.gothamMediumRegular,
                filters.recentQuestion
                  ? styles.textActive
                  : styles.textUnactive,
              ]}>
              Recent Questions
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ElementFlatList
              item={item}
              onPressElement={this.handlePressElement}
            />
          )}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
          }}
        />
        <Icon
          name="ios-add"
          type="ionicon"
          color={colors.HEADER}
          iconStyle={{
            width: '100%',
          }}
          containerStyle={styles.iconAddContainer}
          onPress={() => {
            this.props.navigation.navigate('InKuwaitAsk');
          }}
        />
      </View>
    );
  }
}

export default InKuwaitFAQScreen;
