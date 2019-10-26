import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

const ElementFlatList = ({ item }) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.elementContainer}>
      <View style={styles.elementIcon}>
        <Image
          source={item.icon}
          style={{ width: null, height: null, flex: 1 }}></Image>
      </View>
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
        { title: 'Cars', icon: require('../../assets/icons/car.png') },
        { title: 'For Sale', icon: require('../../assets/icons/sale.png') },
        { title: 'Services', icon: require('../../assets/icons/tool.png') },
        { title: 'Jobs', icon: require('../../assets/icons/job.png') },
        {
          title: 'Properties',
          icon: require('../../assets/icons/property.png'),
        },
        { title: 'Pets', icon: require('../../assets/icons/pets.png') },
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
