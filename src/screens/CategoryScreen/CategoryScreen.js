import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

const ElementFlatList = ({ item }) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.elementContainer}>
      <View style={styles.elementIcon} />
      <Text style={[styles.elementTitle, globalStyles.gothamBook]}>
        {item.title}
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
      categoryList: [
        { title: 'Cars' },
        { title: 'For Sale' },
        { title: 'Services' },
        { title: 'Jobs' },
        { title: 'Properties' },
        { title: 'Pets' },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.categoryList}
          renderItem={({ item }) => <ElementFlatList item={item} />}
          keyExtractor={(item, index) => item}
          ItemSeparatorComponent={() => (
            <Divider style={styles.elementDivider} />
          )}
        />
      </View>
    );
  }
}

export default withNavigation(CategoryScreen);
