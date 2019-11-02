import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../../constants/globalStyles';
import styles from './styles';
import { colors } from '../../constants/colors';

import StarRating from 'react-native-star-rating';

const OrganisationAndServicesList = ({
  item,
  onPressOrganizationOrService,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPressOrganizationOrService()}>
    <View style={styles.pictureBlock}>
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={styles.picture}>
        <Icon
          size={20}
          name={item.active ? 'ios-heart' : 'ios-heart-empty'}
          type="ionicon"
          color={item.active ? colors.HEART_ACTIVE : 'white'}
          containerStyle={{ position: 'absolute', top: 5, right: 10 }}
        />
      </ImageBackground>
    </View>
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
  </TouchableOpacity>
);

export default OrganisationAndServicesList;
