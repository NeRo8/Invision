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

  render() {
    const { adsList } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={adsList.results}
          numColumns={2}
          renderItem={({ item }) => <AdFavorite item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Ads;
