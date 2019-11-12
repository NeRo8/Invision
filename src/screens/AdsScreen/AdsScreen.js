import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native';
import ElementList from '../../components/ElementList';
import SplashScreen from 'react-native-splash-screen';

import styles from './styles';

import { colors } from '../../constants/colors';

import { get_ads } from '../../api';

class AdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    get_ads().then(responce => {
      console.log(responce);
      this.setState({ data: responce });
    });
  }

  showProductDetail = () => {
    this.props.navigation.navigate('ProductDetail');
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
          data={this.state.data}
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

export default AdsScreen;
