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
import { connect } from 'react-redux';
import { getAdsFavorites } from '../../redux/actions/adsAction';

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

      dataAds: [],
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

  componentDidMount() {
    this.props.getFavorites();
  }
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

const mapStateToProps = state => {
  return {
    adsFavorites: state.ads.adsFavoritesList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorites: () => {
      dispatch(getAdsFavorites());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);
