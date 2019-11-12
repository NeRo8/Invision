import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

import { get_category } from '../../../api';

const ElementFlatList = ({ item }) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.elementContainer}>
      <View style={styles.elementIcon}>
        <Image
          source={item.icon}
          style={{ width: null, height: null, flex: 1 }}
        />
      </View>
      <Text style={[globalStyles.gothamBook, styles.elementTitle]}>
        {item.name}
      </Text>
      <Icon
        name="chevron-right"
        type="material-community"
        color="silver"
        size={32}
      />
    </View>
  </TouchableOpacity>
);

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    get_category().then(responce => this.setState({ categoryList: responce }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.categoryList}
          renderItem={({ item }) => <ElementFlatList item={item} />}
          keyExtractor={item => item.pk.toString()}
          ItemSeparatorComponent={() => (
            <Divider style={styles.elementDivider} />
          )}
        />
      </View>
    );
  }
}

export default withNavigation(CategoryScreen);
