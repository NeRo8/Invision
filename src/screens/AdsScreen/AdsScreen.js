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

  onPressElement = pk => {
    const { navigation, setLoad } = this.props;
    setLoad(true);
    navigation.navigate('ProductDetail', { id: pk });
  };

  render() {
    const { loading, adsList, adsConfig, getNextAds } = this.props;

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
                  onPressProduct={this.onPressElement}
                />
              )}
              contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
              keyExtractor={item => item.pk.toString()}
              onEndReached={() => getNextAds(adsConfig.next)}
              onEndReachedThreshold={0.5}
            />
            <View style={styles.pagination}>
              <Text style={{ fontWeight: 'bold' }}>
                {adsList.length}/{adsConfig.count}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default AdsScreen;
