import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import AdFavorite from './components/AdFavorite';

import styles from './styles';

class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getFavorAds, navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      getFavorAds();
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
    const { adsList } = this.props;
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
