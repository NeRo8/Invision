import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';

import ElementListNews from '../../../../components/ElementListNews';
import { getNews } from '../../../../redux/actions/inKuwaitAction';
import { connect } from 'react-redux';
import styles from './styles';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.props.getNewsList();
  };

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
