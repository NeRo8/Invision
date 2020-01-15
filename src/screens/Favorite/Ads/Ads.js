import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import AdFavorite from './components/AdFavorite';
import LoadingStatus from '../../../components/LoadingStatus';

import styles from './styles';

class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getFavorAds, navigation, authStatus } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      if (authStatus) {
        getFavorAds();
      }
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  handlePressHeart = id => {
    const { deleteAd } = this.props;

    deleteAd(id);
  };

  render() {
    const { adsList, authStatus, loading } = this.props;

    if (!authStatus) {
      return <LoadingStatus text="First you need sign in..." />;
    }

    if (loading) {
      return <LoadingStatus />;
    }

    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={adsList.results}
          numColumns={2}
          renderItem={({ item }) => (
            <AdFavorite item={item} onPressHeart={this.handlePressHeart} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Ads;
