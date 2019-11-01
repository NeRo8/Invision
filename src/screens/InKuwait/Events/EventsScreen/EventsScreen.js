import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import ElementListEvents from '../../../../components/ElementListEvents';

import { colors } from '../../../../constants/colors';

class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEvents: [
        {
          id: 0,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 1,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 2,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 3,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 4,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 5,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
      ],
    };
  }

  handlePressHeart = id => {
    const newDataEve = this.state.dataEvents.map(item =>
      item.id === id ? { ...item, favorite: !item.favorite } : { ...item },
    );
    this.setState({
      dataEvents: newDataEve,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={this.state.dataEvents}
          renderItem={({ item }) => (
            <ElementListEvents
              element={item}
              onPressProduct={() => {}}
              onPressHeart={this.handlePressHeart}
            />
          )}
          contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

export default EventsScreen;
