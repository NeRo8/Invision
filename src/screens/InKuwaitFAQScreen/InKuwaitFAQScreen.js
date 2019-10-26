import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';

import styles from './styles';

const ElementFlatList = ({ item }) => (
  <View style={styles.elementFL}>
    <View style={styles.roundView}>
      <Text>{item.size}</Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text>{item.title}</Text>
    </View>
  </View>
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
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <View style={styles.headerBlock}>
          <View style={styles.selectBlockActive}>
            <Text style={styles.textActive}>Top Questions</Text>
          </View>
          <View style={styles.selectBlock}>
            <Text>Recent Questions</Text>
          </View>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <ElementFlatList item={item} />}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
          }}
        />
      </View>
    );
  }
}

export default InKuwaitFAQScreen;
