import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../constants/globalStyles';
import styles from './styles';
import { colors } from '../../constants/colors';

import StarRating from 'react-native-star-rating';

const ElementListOrganisation = ({ item, onPressOrganizationOrService }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPressOrganizationOrService()}>
    <View style={styles.pictureBlock}>
      <Image source={item.image} style={styles.picture} resizeMode="contain" />
      <Icon
        size={20}
        name={item.active ? 'ios-heart' : 'ios-heart-empty'}
        type="ionicon"
        color={item.active ? colors.HEART_ACTIVE : 'white'}
        underlayColor="transparent"
        containerStyle={{ position: 'absolute', top: 5, right: 10, zIndex: 1 }}
        onPress={() => {}}
      />
    </View>
    <View style={{ marginHorizontal: 10 }}>
      <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
        {item.title}
      </Text>
      <View style={styles.date}>
        <StarRating
          disabled
          maxStars={5}
          rating={item.rating}
          emptyStar="ios-star"
          fullStar="ios-star"
          halfStar="ios-star"
          iconSet="Ionicons"
          fullStarColor={colors.STAR}
          emptyStarColor={colors.UNACTIVE}
          starSize={15}
          starStyle={{ marginRight: 6 }}
        />
        <Text style={[globalStyles.gothamBook, styles.rating]}>
          {item.rating}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ElementListOrganisation;
