import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

import { HeaderInKuwaitCategory } from '../../../../components/Headers';

import { ElementListNews } from '../../../../components/ElementLists';

import styles from './styles';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { getNewsList } = this.props;

    getNewsList();
  }

  onPressNews = idNews => {
    const { navigation, setLoad } = this.props;

    setLoad();

    navigation.navigate('NewsDetail', { id: idNews });
  };

  render() {
    const {
      navigation,
      newsList,
      setFilters,
      getNewsList,
      newsFilters,
    } = this.props;

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
          onSearchQuery={setFilters}
          onSubmitQuery={() => getNewsList(newsFilters)}
        />
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={newsList}
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

export default NewsScreen;
