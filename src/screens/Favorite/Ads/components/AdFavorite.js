import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';
import { colors } from '../../../../constants';

class AdFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, onPressHeart } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Image
            source={{ uri: item.ad.primary_image }}
            style={styles.image}
            resizeMode="cover"
          />
          <Icon
            name="ios-heart"
            type="ionicon"
            underlayColor="transparent"
            color={colors.HEART_ACTIVE}
            containerStyle={styles.heartContainer}
            onPress={() => onPressHeart(item.ad.pk)}
          />
        </View>
        <View style={styles.bottomBlock}>
          <Text style={styles.title}>{item.ad.title}</Text>
          <Text style={styles.price}>
            {item.ad.price} {item.ad.currency.toUpperCase()}
          </Text>
          <Text style={styles.description}>For sale</Text>
        </View>
      </View>
    );
  }
}

export default AdFavorite;
