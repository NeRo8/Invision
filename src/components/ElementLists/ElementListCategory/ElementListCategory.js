import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

const ElementCategoryList = ({ item, onPressElement }) => (
  <TouchableOpacity
    onPress={() => onPressElement(item.name)}
    style={styles.elementContainer}>
    <View style={styles.elementIcon}>
      <Image
        source={
          item.icon_image !== null ? { uri: item.icon_image } : item.icon_image
        }
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
  </TouchableOpacity>
);

export default ElementCategoryList;
