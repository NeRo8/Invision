import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ElementList from '../../components/ElementList';

import { colors } from '../../constants/colors';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: 1, active: true },
        { title: 2, active: false },
        { title: 1, active: true },
        { title: 2, active: false },
        { title: 1, active: true },
        { title: 2, active: false },
        { title: 1, active: true },
        { title: 2, active: false },
        { title: 1, active: true },
        { title: 2, active: false },
        { title: 1, active: true },
        { title: 2, active: false },
        { title: 1, active: true },
        { title: 2, active: false },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={this.state.data}
          renderItem={item => <ElementList />}
          contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

export default HomeScreen;
