import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { ElementListAds } from '../../components/ElementLists';
import SplashScreen from 'react-native-splash-screen';

import { colors } from '../../constants';
import styles from './styles';

class AdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { getAdsList } = this.props;
    SplashScreen.hide();

    getAdsList();
  }

  showProductDetail = productId => {
    this.props.navigation.navigate('ProductDetail', { productId: productId });
  };

  onEndAds = url => {
    const { onLoadPreviousAds } = this.props;
    if (url !== null) {
      onLoadPreviousAds(url);
      this.setState({
        page: this.state.page - 1,
      });
    }
  };

  onNextAds = url => {
    const { onRefreshAds } = this.props;
    if (url !== null) {
      onRefreshAds(url);
    }
  };

  render() {
    const { loading, adsList, adsConfig, page } = this.props;

    return (
      <View style={styles.flatListView}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        {loading ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={colors.HEADER} />
          </View>
        ) : (
          <View>
            <FlatList
              numColumns={2}
              data={adsList}
              renderItem={({ item }) => (
                <ElementListAds
                  item={item}
                  onPressProduct={this.showProductDetail}
                />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={item => item.pk.toString()}
              refreshing={false}
              onRefresh={() => this.onEndAds(adsConfig.previous)}
              onEndReached={() => this.onNextAds(adsConfig.next)}
              onEndReachedThreshold={0.05}
            />
            <View style={styles.pagination}>
              <Text style={{ fontWeight: 'bold' }}>
                {page}/{Math.round(adsConfig.count / 15)}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default AdsScreen;
