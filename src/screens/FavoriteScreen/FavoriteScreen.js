import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import LoadingStatus from '../../components/LoadingStatus';

import {
  ElementListAds,
  ElementListEvents,
  ElementListOrganisation,
} from '../../components/ElementLists';
import TextPicker from '../../components/TextPicker';

import styles from './styles';

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
    };
  }

  componentDidMount() {
    const { navigation, getFavoriteAds, deleteAllFavorites } = this.props;

    navigation.addListener('didFocus', () => getFavoriteAds());

    navigation.setParams({
      deleteFavorites: () => {
        deleteAllFavorites();
      },
    });
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

  renderFavoritesAds = () => {
    const { adsFavoritesList } = this.props;

    if (adsFavoritesList !== undefined) {
      return adsFavoritesList.map(item => {
        return {
          ...item,
          ad: { ...item.ad, is_favorite: true },
        };
      });
    } else {
      return [];
    }
  };
  render() {
    const { authStatus } = this.props;
    const { activeFilter } = this.state;

    if (!authStatus) {
      return (
        <View style={styles.container}>
          <View style={styles.headerBlock}>
            <TextPicker
              dataList={this.state.filters}
              onPressElement={this.handlePressElement}
            />
          </View>
          <LoadingStatus text="First you need sign in..." />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TextPicker
            dataList={this.state.filters}
            onPressElement={this.handlePressElement}
          />
        </View>

        <View style={styles.bodyBlock}>
          {activeFilter === 'ads' ? (
            <FlatList
              numColumns={2}
              data={this.renderFavoritesAds()}
              renderItem={({ item }) => (
                <ElementListAds item={item.ad} onPressProduct={() => {}} />
              )}
              keyExtractor={(item, index) => index}
            />
          ) : activeFilter === 'org' ? (
            <FlatList
              numColumns={2}
              data={[]}
              renderItem={({ item }) => (
                <ElementListOrganisation
                  element={item}
                  onPressProduct={() => {}}
                />
              )}
              keyExtractor={(item, index) => index}
            />
          ) : (
            <FlatList
              numColumns={2}
              data={[]}
              renderItem={({ item }) => (
                <ElementListEvents element={item} onPressProduct={() => {}} />
              )}
              keyExtractor={(item, index) => index}
            />
          )}
        </View>
      </View>
    );
  }
}

export default FavoriteScreen;
