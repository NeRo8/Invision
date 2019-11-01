import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../constants/globalStyles';
import styles from './styles';

const NewsList = ({ item, onPressProduct }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPressProduct()}>
    <View style={styles.pictureBlock}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/Event.jpg')}
        style={styles.picture}
      />
      <View style={styles.date}>
        <Icon
          name="clock"
          type="octicon"
          color={'#63A3FF'}
          size={16}
          iconStyle={{ marginRight: 10 }}
        />
        <Text style={[globalStyles.gothamBook, styles.title]}>{item.date}</Text>
      </View>
    </View>

    <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

export default NewsList;
