import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';

import globalStyles from '../../constants/globalStyles';
import styles from './styles';

const ElementList = ({ item, onPressProduct }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPressProduct(item.pk)}>
    <View style={{ flex: 1 }}>
      <View style={styles.pictureBlock}>
        <Image
          resizeMode="cover"
          source={{ uri: item.primary_image }}
          style={styles.picture}
        />
        <Icon
          name={item.is_favorite ? 'ios-heart' : 'ios-heart-empty'}
          type="ionicon"
          color={item.is_favorite ? colors.HEART_ACTIVE : 'white'}
          containerStyle={{ position: 'absolute', top: 5, right: 10 }}
        />
      </View>
      <View style={styles.textBlock}>
        <Text style={[globalStyles.gothamBold, styles.title]}>
          {item.title}
        </Text>
        <Text style={[globalStyles.gothamBook, styles.price]}>
          {item.price}{' '}
          {item.currency !== undefined
            ? item.currency.toUpperCase()
            : item.currency}
        </Text>
        <Text style={[globalStyles.gothamBook, styles.status]}>For sale</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ElementList;
