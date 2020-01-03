import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Grayscale } from 'react-native-color-matrix-image-filters';
import moment from 'moment';

import { colors, globalStyles } from '../../../constants';
import styles from './styles';

const ElementFlEvents = ({
  element,
  onPressProduct,
  onPressHeart,
  grayscale,
}) => (
  <TouchableOpacity onPress={() => onPressProduct()} style={styles.container}>
    <View style={styles.fullFlex}>
      <View style={{ flex: 1 }}>
        {grayscale ? (
          <View style={{ flex: 1 }}>
            <Text style={[globalStyles.gothamBold, styles.textGrayscale]}>
              PAST
            </Text>
            <Grayscale style={{ flex: 1 }}>
              <Image source={{ uri: element.image }} style={styles.image} />
            </Grayscale>
          </View>
        ) : (
          <Image source={{ uri: element.image }} style={styles.image} />
        )}
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
          {moment(element.start_date).format('MMM d')}
          {' - '}
          {moment(element.end_date).format('MMM d')}
        </Text>

        <Text style={[globalStyles.gothamMediumRegular, styles.titleText]}>
          {element.title}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ElementFlEvents;
