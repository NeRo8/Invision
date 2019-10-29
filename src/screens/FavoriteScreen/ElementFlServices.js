import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import StarRating from 'react-native-star-rating';

import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

const ElementFlServices = ({ element, onPressProduct }) => (
  <TouchableOpacity onPress={() => onPressProduct()} style={styles.container}>
    <View style={styles.fullFlex}>
      <View style={{ flex: 2 }}>
        <Image source={element.image} style={styles.image} />
        <Icon
          name={'ios-heart'}
          type="ionicon"
          color={colors.HEART_ACTIVE}
          containerStyle={styles.heart}
        />
      </View>
      <View style={[styles.fullFlex, { paddingHorizontal: 5 }]}>
        <Text style={[globalStyles.gothamMediumRegular, styles.titleText]}>
          {element.title}
        </Text>
        <View style={styles.rating}>
          <StarRating
            disabled
            maxStars={5}
            rating={element.rating}
            emptyStar="ios-star"
            fullStar="ios-star"
            halfStar="ios-star-half"
            iconSet="Ionicons"
            fullStarColor={colors.STAR}
            emptyStarColor={colors.UNACTIVE}
            halfStarColor={colors.STAR}
            starSize={14}
            starStyle={styles.star}
          />
          <Text style={[globalStyles.gothamBook, styles.ratingText]}>
            {element.rating.toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 174,
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
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  star: {
    marginRight: 3,
  },
  titleText: {
    fontSize: 13,
    lineHeight: 22,
    marginVertical: 5,
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
});

export default ElementFlServices;
