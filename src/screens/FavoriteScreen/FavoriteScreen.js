import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';

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

  async componentDidMount() {
    //FOR TOKEN
    const token = await getData('token');

    this.props.getFavorites(token);
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
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TextPicker
            dataList={this.state.filters}
            onPressElement={this.handlePressElement}
          />
        </View>
        {this.props.adsFavorites === undefined ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={colors.HEADER} />
          </View>
        ) : (
          <View style={styles.bodyBlock}>
            {this.state.activeFilter === 'ads' ? (
              <FlatList
                numColumns={2}
                data={this.props.adsFavorites}
                renderItem={({ item }) => (
                  <ElementListAds item={item.ad} onPressProduct={() => {}} />
                )}
                contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
                keyExtractor={(item, index) => item.id}
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
                keyExtractor={(item, index) => item.id}
              />
            ) : (
              <FlatList
                numColumns={2}
                data={[]}
                renderItem={({ item }) => (
                  <ElementListEvents element={item} onPressProduct={() => {}} />
                )}
                contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
                keyExtractor={(item, index) => item.id}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    adsFavorites: state.ads.adsFavoritesList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorites: token => {
      dispatch(getAdsFavorites(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);
