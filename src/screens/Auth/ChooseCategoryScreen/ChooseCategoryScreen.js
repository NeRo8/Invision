import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Divider } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';

const ElementFl = ({ element }) => (
  <TouchableOpacity style={styles.elementContainer}>
    <View style={styles.elementIcon}>
      <Image
        source={element.icon}
        style={{ flex: 1, width: null, height: null }}
      />
    </View>
    <Text
      style={[
        globalStyles.gothamBook,
        { fontSize: 17, lineHeight: 27, marginLeft: 20 },
      ]}>
      {element.title}
    </Text>
  </TouchableOpacity>
);

class ChooseCategoryScreen extends Component {
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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 25 }}>
          <Text
            style={[globalStyles.gothamBold, { fontSize: 12, lineHeight: 20 }]}>
            SELECT CATEGORY
          </Text>
          <FlatList
            data={this.state.categoryList}
            renderItem={({ item }) => <ElementFl element={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
              <Divider style={styles.elementDivider} />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  elementContainer: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
  },
  elementDivider: {
    marginHorizontal: 0,
  },
  elementIcon: {
    width: 30,
    height: 30,
  },
  elementTitle: {
    flex: 1,
    marginLeft: 10,
  },
});

export default ChooseCategoryScreen;
