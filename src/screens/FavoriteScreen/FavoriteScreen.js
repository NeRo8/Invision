import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';

import {
  ElementListAds,
  ElementListEvents,
  ElementListOrganisation,
} from '../../components/ElementLists';
import TextPicker from '../../components/TextPicker';

import { colors } from '../../constants';

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
    const {
      authStatus,
      token,
      getFavoriteAds,
      navigation,
      deleteAllFavorites,
      adsFavoritesList,
    } = this.props;
    if (authStatus) {
      this.props.navigation.addListener('didFocus', payload =>
        getFavoriteAds(token),
      );
    }

    navigation.setParams({
      deleteFavorites: () => {
        deleteAllFavorites(token);
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
    const { authStatus, adsFavoritesList } = this.props;
    // const r = adsFavoritesList.map(item => {
    //   return { ...item, is_favorite: true };
    // });
    // console.log('R: ', r);

    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TextPicker
            dataList={this.state.filters}
            onPressElement={this.handlePressElement}
          />
        </View>
        {!authStatus ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={colors.HEADER} />
            <Text style={styles.loadingText}>First you need sign in ...</Text>
          </View>
        ) : (
          <View style={styles.bodyBlock}>
            {this.state.activeFilter === 'ads' ? (
              <FlatList
                numColumns={2}
                data={this.renderFavoritesAds()}
                renderItem={({ item }) => (
                  <ElementListAds item={item.ad} onPressProduct={() => {}} />
                )}
                contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
                keyExtractor={(item, index) => index}
              />
            ) : this.state.activeFilter === 'org' ? (
              <FlatList
                numColumns={2}
                data={[]}
                renderItem={({ item }) => (
                  <ElementListOrganisation
                    element={item}
                    onPressProduct={() => {}}
                  />
                )}
                contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
                keyExtractor={(item, index) => index}
              />
            ) : (
              <FlatList
                numColumns={2}
                data={[]}
                renderItem={({ item }) => (
                  <ElementListEvents element={item} onPressProduct={() => {}} />
                )}
                contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
                keyExtractor={(item, index) => index}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

export default FavoriteScreen;
