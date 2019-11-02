import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import ElementListEvents from '../../../../components/ElementListEvents';
import TextPicker from '../../../../components/TextPicker';

import { colors } from '../../../../constants/colors';

import styles from './styles';

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

      filters: [
        {
          id: 0,
          title: 'Upcoming Events',
          active: true,
          func: () => {
            //console.warn('Upcoming');
          },
        },
        {
          id: 1,
          title: 'Previous Events',
          active: false,
          func: () => {
            //console.warn('Previo');
          },
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

  handlePressFilter = id => {
    const { filters } = this.state;

    const newFilter = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilter,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerPicker}>
          <TextPicker
            dataList={this.state.filters}
            onPressElement={this.handlePressFilter}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.dataEvents}
          renderItem={({ item }) => (
            <ElementListEvents
              element={item}
              onPressProduct={() => {}}
              onPressHeart={this.handlePressHeart}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
        <View style={styles.btnLContainer}>
          <Icon
            name="ios-pin"
            type="ionicon"
            color={colors.HEADER}
            iconStyle={styles.icon}
            onPress={() => {
              this.props.navigation.navigate('InKuwaitEventsMap');
            }}
          />
        </View>
      </View>
    );
  }
}

export default EventsScreen;
