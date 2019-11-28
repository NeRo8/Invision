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
    const { adsList, getAdsList } = this.props;
    SplashScreen.hide();

    if (adsList.length === 0) {
      this.props.getAdsList();
    }
  }

  showProductDetail = productId => {
    this.props.navigation.navigate('ProductDetail', { productId: productId });
  };

  renderBottomPaginator = () => (
    <View style={styles.pagination}>
      <Text style={{ fontWeight: 'bold' }}>1/30</Text>
    </View>
  );

  render() {
    const { loading, adsList } = this.props;

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
            keyExtractor={item => item.pk}
          />
        )}
      </View>
    );
  }
}

export default AdsScreen;
