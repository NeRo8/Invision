import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

import styles from './styles';
import { Grayscale } from 'react-native-color-matrix-image-filters';

const ElementFlEvents = ({
  element,
  onPressProduct,
  onPressHeart,
  grayscale = false,
}) => (
  <TouchableOpacity onPress={() => onPressProduct()} style={styles.container}>
    <View style={styles.fullFlex}>
      <View style={{ flex: 1 }}>
        {grayscale ? (
          <Grayscale style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
              }}>
              <Text style={[globalStyles.gothamBold, styles.textGrayscale]}>
                PAST
              </Text>
              <Image source={element.image} style={styles.image} />
            </View>
          </Grayscale>
        ) : (
          <Image source={element.image} style={styles.image} />
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
