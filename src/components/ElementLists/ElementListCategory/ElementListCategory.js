import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

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

export default ElementCategoryList;
