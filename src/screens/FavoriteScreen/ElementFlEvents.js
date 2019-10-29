import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

const ElementFlEvents = ({ element, onPressProduct }) => (
  <TouchableOpacity onPress={() => onPressProduct()} style={styles.container}>
    <View style={styles.fullFlex}>
      <View style={{ flex: 1 }}>
        <Image source={element.image} style={styles.image} />
        <Icon
          name={'ios-heart'}
          type="ionicon"
          color={colors.HEART_ACTIVE}
          containerStyle={styles.heart}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 207,
    backgroundColor: 'white',
    margin: 5,
  },
  fullFlex: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  star: {
    marginRight: 3,
  },
  titleText: {
    fontSize: 13,
    lineHeight: 24,
    marginVertical: 5,
    color: '#2C3440',
  },
  ratingText: {
    marginHorizontal: 3,
    fontSize: 12,
    lineHeight: 18,
  },
  heart: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  dateText: {
    fontSize: 13,
    color: '#6B6F81',
    lineHeight: 24,
    marginVertical: 10,
  },
});

export default ElementFlEvents;
