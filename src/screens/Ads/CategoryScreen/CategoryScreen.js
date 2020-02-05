import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';

import styles from './styles';

import { ElementListCategory } from '../../../components/ElementLists';

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getCategoriesList } = this.props;

    getCategoriesList();
  }

  setFilterByCategory = categoryName => {
    const { navigation, setFilters, getAllAds } = this.props;

    setFilters('category', categoryName);
    getAllAds();
    navigation.goBack();
  };

  onLoadMoreCategories = () => {
    const { next, loadMoreCategories } = this.props;

    if (next !== null) {
      loadMoreCategories(next);
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.data}
          renderItem={({ item }) => (
            <ElementListCategory
              item={item}
              onPressElement={this.setFilterByCategory}
            />
          )}
          keyExtractor={item => item.pk.toString()}
          ItemSeparatorComponent={() => (
            <Divider style={styles.elementDivider} />
          )}
          onEndReachedThreshold={0.3}
          onEndReached={this.onLoadMoreCategories}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </SafeAreaView>
    );
  }
}

export default CategoryScreen;
