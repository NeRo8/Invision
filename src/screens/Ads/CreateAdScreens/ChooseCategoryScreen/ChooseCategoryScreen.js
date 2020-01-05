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

import { globalStyles } from '../../../../constants';

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
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 25 }}>
          <Text
            style={[globalStyles.gothamBold, { fontSize: 12, lineHeight: 20 }]}>
            SELECT CATEGORY
          </Text>
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
