import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

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
        {
          id: 1,
          title: 'Cars',
          icon: require('../../../assets/icons/car.png'),
        },
        {
          id: 2,
          title: 'For Sale',
          icon: require('../../../assets/icons/sale.png'),
        },
        {
          id: 3,
          title: 'Services',
          icon: require('../../../assets/icons/tool.png'),
        },
        {
          id: 4,
          title: 'Jobs',
          icon: require('../../../assets/icons/job.png'),
        },
        {
          id: 5,
          title: 'Properties',
          icon: require('../../../assets/icons/property.png'),
        },
        {
          id: 6,
          title: 'Pets',
          icon: require('../../../assets/icons/pets.png'),
        },
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
