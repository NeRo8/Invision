import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

import ElementList from '../../components/ElementList';
import ElementFlServices from './ElementFlServices';
import ElementFlEvents from './ElementFlEvents';

import styles from './styles';
import { colors } from '../../constants/colors';

import TextPicker from '../../components/TextPicker';

class FavoriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'ads',
      filters: [
        {
          id: 0,
          title: 'Ads',
          active: true,
          func: () => {
            this.setState({ activeFilter: 'ads' });
          },
        },
        {
          id: 1,
          title: 'Org/Services',
          active: false,
          func: () => {
            this.setState({ activeFilter: 'org' });
          },
        },
        {
          id: 2,
          title: 'Events',
          active: false,
          func: () => {
            this.setState({ activeFilter: 'even' });
          },
        },
      ],

      dataAds: [
        { id: 1, title: 'Pioneer handphones premium', active: true },
        { id: 2, title: 'Pioneer handphones premium', active: true },
        { id: 3, title: 'Pioneer handphones premium', active: true },
        { id: 4, title: 'Pioneer handphones premium', active: true },
        { id: 5, title: 'Pioneer handphones premium', active: true },
        { id: 6, title: 'Pioneer handphones premium', active: true },
        { id: 7, title: 'Pioneer handphones premium', active: true },
        { id: 8, title: 'Pioneer handphones premium', active: true },
        { id: 9, title: 'Pioneer handphones premium', active: true },
        { id: 10, title: 'Pioneer handphones premium', active: true },
      ],
      dataOrg: [
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 3.3,
        },
        {
          id: 1,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5.0,
        },
        {
          id: 2,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5.0,
        },
        {
          id: 3,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 1.0,
        },
        {
          id: 4,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 2.0,
        },
        {
          id: 5,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 3.0,
        },
        {
          id: 6,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5.0,
        },
        {
          id: 7,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5,
        },
      ],
      dataEvents: [
        {
          id: 0,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 1,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 2,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 3,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 4,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 5,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
      ],
    };
  }

  handlePressElement = id => {
    const { filters } = this.state;

    const newFilters = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilters,
    });
  };

  render() {
    const { filters, dataAds, dataOrg, dataEvents } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TextPicker
            dataList={this.state.filters}
            onPressElement={this.handlePressElement}
          />
        </View>
        <View style={styles.bodyBlock}>
          {this.state.activeFilter === 'ads' ? (
            <FlatList
              numColumns={2}
              data={this.state.dataAds}
              renderItem={({ item }) => (
                <ElementList item={item} onPressProduct={() => {}} />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={(item, index) => item.id}
            />
          ) : this.state.activeFilter === 'org' ? (
            <FlatList
              numColumns={2}
              data={this.state.dataOrg}
              renderItem={({ item }) => (
                <ElementFlServices element={item} onPressProduct={() => {}} />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={(item, index) => item.id}
            />
          ) : (
            <FlatList
              numColumns={2}
              data={this.state.dataEvents}
              renderItem={({ item }) => (
                <ElementFlEvents element={item} onPressProduct={() => {}} />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={(item, index) => item.id}
            />
          )}
        </View>
      </View>
    );
  }
}

export default FavoriteScreen;
