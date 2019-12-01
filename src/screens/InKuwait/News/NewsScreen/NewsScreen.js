import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { HeaderInKuwaitCategory } from '../../../../components/Headers';

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

  onPressNews = idNews => {
    this.props.navigation.navigate('NewsArticle', { id: idNews });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'transparent'} />
        <HeaderInKuwaitCategory
          title="News"
          leftIcon={true}
          onPressLeftIcon={() => navigation.navigate('InKuwait')}
          rightIcon={
            <Icon
              name="filter"
              type="material-community"
              color="white"
              underlayColor="transparent"
              onPress={() => navigation.navigate('NewsFilter')}
            />
          }
        />
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={this.props.data}
            renderItem={({ item }) => (
              <ElementListNews item={item} onPressProduct={this.onPressNews} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
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
