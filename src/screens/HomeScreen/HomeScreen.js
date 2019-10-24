import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native';
import ElementList from '../../components/ElementList';

import styles from './styles';

import { colors } from '../../constants/colors';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 1, active: true },
        { id: 2, title: 2, active: false },
        { id: 3, title: 1, active: true },
        { id: 4, title: 2, active: false },
        { id: 5, title: 1, active: true },
        { id: 6, title: 2, active: false },
        { id: 7, title: 1, active: true },
        { id: 8, title: 2, active: false },
        { id: 9, title: 1, active: true },
        { id: 10, title: 2, active: false },
        { id: 11, title: 1, active: true },
        { id: 12, title: 2, active: false },
        { id: 13, title: 1, active: true },
        { id: 14, title: 2, active: false },
      ],
    };
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

export default HomeScreen;
