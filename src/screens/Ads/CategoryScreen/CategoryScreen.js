import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';

import { ElementListCategory } from '../../../components/ElementLists';

import styles from './styles';

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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
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
        />
      </View>
    );
  }
}

export default CategoryScreen;
