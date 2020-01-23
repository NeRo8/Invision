import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';
import styles from './styles';

const ElementListNews = ({ item, onPressProduct }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPressProduct(item.pk)}>
    <View style={styles.pictureBlock}>
      <Image
        resizeMode="cover"
        source={{ uri: item.cover }}
        style={styles.picture}
      />
      <View style={styles.date}>
        <Icon
          name="clock"
          type="octicon"
          color={'#63A3FF'}
          size={16}
          iconStyle={{ marginRight: 10 }}
          underlayColor="transparent"
        />
        <Text style={[globalStyles.gothamBook, styles.title]}>
          {item.created.slice(0, 10)}
        </Text>
      </View>
    </View>

    <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

export default ElementListNews;
