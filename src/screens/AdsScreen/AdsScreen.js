import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native';
import ElementList from '../../components/ElementList';
import SplashScreen from 'react-native-splash-screen';

import styles from './styles';

import { colors } from '../../constants/colors';

class AdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 'Pioneer handphones premium', active: true },
        { id: 2, title: 'Pioneer handphones premium', active: true },
        { id: 3, title: 'Pioneer handphones premium', active: true },
        { id: 4, title: 'Pioneer handphones premium', active: true },
        { id: 5, title: 'Pioneer handphones premium', active: true },
        { id: 6, title: 'Pioneer handphones premium', active: true },
        { id: 7, title: 'Pioneer handphones premium', active: true },
        { id: 8, title: 'Pioneer handphones premium', active: true },
        { id: 9, title: 'Pioneer handphones premium', active: true },
        { id: 10, title: 'Pioneer handphones premium', active: true },
      ],
    };
  }

  componentDidMount() {
    SplashScreen.hide();
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
          keyExtractor={(item, index) => item.id}
        />
        {this.renderBottomPaginator()}
      </SafeAreaView>
    );
  }
}

export default AdsScreen;
