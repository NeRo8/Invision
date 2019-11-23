import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../constants/globalStyles';
import styles from './styles';
import { colors } from '../../constants/colors';

import StarRating from 'react-native-star-rating';

const ElementListOrganisation = ({ element, onPressOrganizationOrService }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPressOrganizationOrService()}>
    <View style={styles.pictureBlock}>
      <Image
        source={element.image}
        style={styles.picture}
        resizeMode="contain"
      />
      <Icon
        size={20}
        name={element.active ? 'ios-heart' : 'ios-heart-empty'}
        type="ionicon"
        color={element.active ? colors.HEART_ACTIVE : 'white'}
        underlayColor="transparent"
        containerStyle={{ position: 'absolute', top: 5, right: 10, zIndex: 1 }}
        onPress={() => {}}
      />
    </View>
    <View style={{ marginHorizontal: 10 }}>
      <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
        {element.title}
      </Text>
      <View style={styles.date}>
        <StarRating
          disabled
          maxStars={5}
          rating={element.rating}
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
          {element.rating}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ElementListOrganisation;
