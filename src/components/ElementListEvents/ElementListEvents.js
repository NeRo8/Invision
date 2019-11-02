import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

import styles from './styles';

const ElementFlEvents = ({ element, onPressProduct, onPressHeart }) => (
  <TouchableOpacity onPress={() => onPressProduct()} style={styles.container}>
    <View style={styles.fullFlex}>
      <View style={{ flex: 1 }}>
        <Image source={element.image} style={styles.image} />
        <Icon
          name={element.favorite ? 'ios-heart' : 'ios-heart-empty'}
          type="ionicon"
          color={element.favorite ? colors.HEART_ACTIVE : 'silver'}
          underlayColor="transparent"
          containerStyle={styles.heart}
          onPress={() => onPressHeart(element.id)}
        />
      </View>
      <View style={[styles.fullFlex, { paddingHorizontal: 5 }]}>
        <Text style={[globalStyles.gothamBook, styles.dateText]}>
          {element.date}
        </Text>

        <Text style={[globalStyles.gothamMediumRegular, styles.titleText]}>
          {element.title}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ElementFlEvents;
