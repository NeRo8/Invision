import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import ElementList from '../../components/ElementList';

import styles from './styles';
import { colors } from '../../constants/colors';
import ElementFlServices from './ElementFlServices';
import ElementFlEvents from './ElementFlEvents';

class FavoriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesCategory: {
        ads: true,
        services: false,
        events: false,
      },
      data: [
        { id: 1, title: 1, active: true },
        { id: 2, title: 2, active: true },
        { id: 3, title: 1, active: true },
        { id: 4, title: 2, active: true },
        { id: 5, title: 1, active: true },
        { id: 6, title: 2, active: true },
        { id: 7, title: 1, active: true },
        { id: 8, title: 2, active: true },
        { id: 9, title: 1, active: true },
        { id: 10, title: 2, active: true },
      ],

      dataOrg: [
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 3.3,
        },
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5.0,
        },
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5.0,
        },
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 1.0,
        },
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 2.0,
        },
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 3.0,
        },
        {
          id: 0,
          image: require('../../assets/images/element-background.jpg'),
          title: 'Central skyscrapers',
          rating: 5.0,
        },
        {
          id: 0,
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
          id: 0,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 0,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 0,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 0,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
        {
          id: 0,
          image: require('../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
        },
      ],
    };
  }

  handlePressCategoryFilter = filter => {
    const { favoritesCategory } = this.state;

    const newFavoriteCategory = {
      ...favoritesCategory,
      ads: false,
      services: false,
      events: false,
      [filter]: true,
    };

    this.setState({
      favoritesCategory: newFavoriteCategory,
    });
  };

  componentDidUpdate() {
    console.log(this.state.favoritesCategory);
  }

  render() {
    const { favoritesCategory } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <View style={styles.selectorContainer}>
            <TouchableOpacity
              style={
                favoritesCategory.ads
                  ? styles.activeElement
                  : styles.unactiveElement
              }
              onPress={() => this.handlePressCategoryFilter('ads')}>
              <Text
                style={
                  favoritesCategory.ads
                    ? styles.textActive
                    : styles.textUnactive
                }>
                Ads
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                favoritesCategory.services
                  ? styles.activeElement
                  : styles.unactiveElement
              }
              onPress={() => this.handlePressCategoryFilter('services')}>
              <Text
                style={
                  favoritesCategory.services
                    ? styles.textActive
                    : styles.textUnactive
                }>
                Org/Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                favoritesCategory.events
                  ? styles.activeElement
                  : styles.unactiveElement
              }
              onPress={() => this.handlePressCategoryFilter('events')}>
              <Text
                style={
                  favoritesCategory.events
                    ? styles.textActive
                    : styles.textUnactive
                }>
                Events
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyBlock}>
          {this.state.favoritesCategory.ads ? (
            <FlatList
              numColumns={2}
              data={this.state.data}
              renderItem={({ item }) => (
                <ElementList item={item} onPressProduct={() => {}} />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={(item, index) => item.id}
            />
          ) : null}
          {this.state.favoritesCategory.services ? (
            <FlatList
              numColumns={2}
              data={this.state.dataOrg}
              renderItem={({ item }) => (
                <ElementFlServices element={item} onPressProduct={() => {}} />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={(item, index) => item.id}
            />
          ) : null}
          {this.state.favoritesCategory.events ? (
            <FlatList
              numColumns={2}
              data={this.state.dataEvents}
              renderItem={({ item }) => (
                <ElementFlEvents element={item} onPressProduct={() => {}} />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={(item, index) => item.id}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

export default FavoriteScreen;
