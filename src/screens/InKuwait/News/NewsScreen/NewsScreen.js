import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ElementListNews } from '../../../../components/ElementLists';
import { getNews } from '../../../../redux/actions/inKuwaitAction';

import styles from './styles';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    this.props.getNewsList();
  }

  onPressNews = newsId => {
    this.props.navigation.navigate('NewsArticle', { newsId: newsId });
  };

  render() {
    return (
      <View style={styles.wraper}>
        <StatusBar backgroundColor={'transparent'} />
        <SafeAreaView style={styles.flatListView}>
          <FlatList
            numColumns={2}
            data={this.props.data}
            renderItem={({ item }) => (
              <ElementListNews item={item} onPressProduct={this.onPressNews} />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.inKuwait.newsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsList: () => {
      dispatch(getNews());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
