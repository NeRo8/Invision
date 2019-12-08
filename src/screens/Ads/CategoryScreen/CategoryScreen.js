import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';

import styles from './styles';
import { setFilter } from '../../../redux/actions/Ads';

const ElementCategoryList = ({ item, onPressElement }) => (
  <TouchableOpacity onPress={() => onPressElement(item.name)}>
    <View style={styles.elementContainer}>
      <View style={styles.elementIcon}>
        <Image
          source={item.icon}
          style={{ width: null, height: null, flex: 1 }}
        />
      </View>
      <Text style={styles.elementTitle}>{item.name}</Text>
      <Icon
        name="chevron-right"
        type="material-community"
        color="silver"
        size={32}
        underlayColor="transparent"
      />
    </View>
  </TouchableOpacity>
);

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getCategoriesList } = this.props;

    getCategoriesList();
  }

  getAdsListByCategoryName = categoryName => {
    const { getAdsList, navigation, setFilters, filters } = this.props;

    setFilters('category', categoryName);

    getAdsList({ category: categoryName });

    navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <ElementCategoryList
              item={item}
              onPressElement={this.getAdsListByCategoryName}
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
