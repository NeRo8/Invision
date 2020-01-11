import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { ElementListAds } from '../../components/ElementLists';
import SplashScreen from 'react-native-splash-screen';

import LoadingStatus from '../../components/LoadingStatus';

import styles from './styles';

class AdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { getAdsList, refreshAuth } = this.props;

    SplashScreen.hide();

    refreshAuth();
    getAdsList();
  }

  onPressElement = pk => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail', { id: pk });
  };

  render() {
    const { loading, adsList, adsConfig, getNextAds } = this.props;

    if (loading) {
      return <LoadingStatus />;
    }

    return (
      <View style={styles.flatListView}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <FlatList
          numColumns={2}
          data={adsList}
          renderItem={({ item }) => (
            <ElementListAds item={item} onPressProduct={this.onPressElement} />
          )}
          keyExtractor={item => item.pk.toString()}
          onEndReached={() => getNextAds(adsConfig.next)}
          onEndReachedThreshold={0.5}
        />
        <View style={styles.pagination}>
          <Text style={{ fontWeight: 'bold' }}>
            {adsList.length} / {adsConfig.count}
          </Text>
        </View>
      </View>
    );
  }
}

export default AdsScreen;
