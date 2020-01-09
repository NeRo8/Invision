import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements';

import styles from './styles';
import { colors } from '../../../../constants';

const ItemList = ({ item, onPressItem }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => onPressItem(item)}>
    <Text style={styles.title}>{item.name}</Text>
    <Icon
      name="chevron-right"
      type="material-community"
      color={colors.HINT}
      size={32}
    />
  </TouchableOpacity>
);

class ChooseCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAllCategories } = this.props;

    getAllCategories();
  }

  onPressItem = item => {
    const { setCategory, navigation } = this.props;

    setCategory(item);
    navigation.goBack();
  };

  render() {
    const { categories } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Select category</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <ItemList item={item} onPressItem={this.onPressItem} />
          )}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          keyExtractor={item => item.pk.toString()}
        />
      </View>
    );
  }
}

export default ChooseCategoryScreen;
