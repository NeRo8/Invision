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

  componentDidMount() {
    const { getAdsList } = this.props;

    SplashScreen.hide();

    getAdsList();
  }

  onPressElement = pk => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail', { id: pk });
  };

  render() {
    const { loading, adsList, adsConfig, getNextAds, getAdsList } = this.props;

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
          refreshing={loading}
          onRefresh={() => getAdsList()}
          onEndReached={() => getNextAds(adsConfig.next)}
          onEndReachedThreshold={0.5}
        />
        <View style={styles.pagination}>
          <Text style={styles.textPagination}>
            {adsList.length} / {adsConfig.count}
          </Text>
        </View>
      </View>
    );
  }
}

export default AdsScreen;
