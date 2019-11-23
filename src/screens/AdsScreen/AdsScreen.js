import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import ElementList from '../../components/ElementList';
import SplashScreen from 'react-native-splash-screen';
//REDUX
import { connect } from 'react-redux';
import { getAds } from '../../redux/actions/adsAction';

import styles from './styles';

import { colors } from '../../constants/colors';

//import { get_ads } from '../../api';

class AdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    //get_ads().then(responce => {
    // this.setState({ data: responce });
    //});
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
            <ElementList item={item} onPressProduct={this.showProductDetail} />
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
