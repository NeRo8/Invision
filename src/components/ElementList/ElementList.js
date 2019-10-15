import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';

const ElementList = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.pictureBlock}>
      <Image
        resizeMode="stretch"
        source={require('../../assets/images/element.jpg')}
        style={styles.picture}
      />
      <Icon
        name={item.active ? 'ios-heart' : 'ios-heart-empty'}
        type="ionicon"
        color={item.active ? colors.HEART_ACTIVE : 'white'}
        containerStyle={{ position: 'absolute', top: 5, right: 10 }}
      />
    </View>
    <View style={styles.textBlock}>
      <Text style={styles.title}>{item.title}Pioneer handphones premium</Text>
      <Text style={styles.price}>10 000 KWD</Text>
      <Text style={styles.status}>For sale</Text>
    </View>
  </View>
);

export default ElementList;
