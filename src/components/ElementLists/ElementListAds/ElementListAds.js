import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../../constants';

import styles from './styles';

class ElementListAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, onPressProduct } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPressProduct(item.pk)}>
        <View style={{ flex: 1 }}>
          <View style={styles.pictureBlock}>
            <Image
              resizeMode="cover"
              source={{ uri: item.primary_image }}
              style={styles.picture}
            />
            <Icon
              name={item.is_favorite ? 'ios-heart' : 'ios-heart-empty'}
              type="ionicon"
              color={item.is_favorite ? colors.HEART_ACTIVE : 'white'}
              containerStyle={{ position: 'absolute', top: 5, right: 10 }}
            />
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>
              {`${item.price} ${item.currency.toUpperCase()}`}
            </Text>
            <Text style={styles.status}>For sale</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ElementListAds;
