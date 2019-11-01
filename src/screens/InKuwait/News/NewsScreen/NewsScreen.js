import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';

import NewsList from '../../../../components/NewsList/NewsList';

import styles from './styles';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 'Lorem Ipsum is simply dummy text.', date: '21.09.18' },
        { id: 2, title: 'Lorem Ipsum is simply dummy text.', date: '21.09.18' },
        { id: 3, title: 'Lorem Ipsum is simply dummy text.', date: '21.09.18' },
        { id: 4, title: 'Lorem Ipsum is simply dummy text.', date: '21.09.18' },
        { id: 5, title: 'Lorem Ipsum is simply dummy text.', date: '21.09.18' },
        { id: 6, title: 'Lorem Ipsum is simply dummy text.', date: '21.09.18' },
      ],
    };
  }

  onPressNews = () => {
    this.props.navigation.navigate('NewsArticle');
  };

  render() {
    return (
      <View style={styles.wraper}>
        <StatusBar backgroundColor={'transparent'} />
        <SafeAreaView style={styles.flatListView}>
          <FlatList
            numColumns={2}
            data={this.state.data}
            renderItem={({ item }) => (
              <NewsList item={item} onPressProduct={this.onPressNews} />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default NewsScreen;
