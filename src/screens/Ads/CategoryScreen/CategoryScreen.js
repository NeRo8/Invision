import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { styles } from './styles';

import { ElementListCategory } from '../../../components/ElementLists';

const ElementCategoryList = ({ item, onPressElement }) => (
  <TouchableOpacity onPress={() => onPressElement(item.name)}>
    <View style={styles.elementContainer}>
      <View style={styles.elementIcon}>
        <Image
          source={{ uri: item.icon_image }}
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
