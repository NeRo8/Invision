import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native';
import { ElementListAds } from '../../components/ElementLists';
import SplashScreen from 'react-native-splash-screen';
//REDUX
import { connect } from 'react-redux';
import { getAds } from '../../redux/actions/adsAction';

import styles from './styles';

import { colors } from '../../constants';

class AdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    SplashScreen.hide();
    this.props.getAdsList();
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
    return (
      <SafeAreaView style={styles.flatListView}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <FlatList
          numColumns={2}
          data={this.props.data}
          renderItem={({ item }) => (
            <ElementListAds
              item={item}
              onPressProduct={this.showProductDetail}
            />
          )}
          contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
          keyExtractor={(item, index) => item.pk}
        />

        {this.renderBottomPaginator()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.ads.adsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: () => {
      dispatch(getAds());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
