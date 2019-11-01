import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';

import globalStyles from '../../constants/globalStyles';
import styles from './styles';

const ElementList = ({ item, onPressProduct }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPressProduct()}>
    <View style={{ flex: 1 }}>
      <View style={styles.pictureBlock}>
        <Image
          resizeMode="cover"
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
        <Text style={[globalStyles.gothamBold, styles.title]}>
          {item.title} Pioneer handphones premium
        </Text>
        <Text style={[globalStyles.gothamBook, styles.price]}>10 000 KWD</Text>
        <Text style={[globalStyles.gothamBook, styles.status]}>For sale</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ElementList;
