import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../../constants';

import styles from './styles';

class ElementListAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      item,
      onPressProduct,
      token,
      removeFavorite,
      addFavorite,
    } = this.props;

    return (
      <View style={styles.container}>
        <Icon
          name={item.is_favorite ? 'ios-heart' : 'ios-heart-empty'}
          type="ionicon"
          underlayColor="transparent"
          color={item.is_favorite ? colors.HEART_ACTIVE : 'white'}
          containerStyle={{
            position: 'absolute',
            zIndex: 2,
            top: 5,
            right: 10,
          }}
          onPress={() => {
            item.is_favorite
              ? removeFavorite(item.pk, token)
              : addFavorite(item.pk, token);
          }}
        />
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => onPressProduct(item.pk)}>
          <View style={{ flex: 1 }}>
            <View style={styles.pictureBlock}>
              {item.primary_image !== null ? (
                <Image
                  resizeMode="cover"
                  source={{ uri: item.primary_image }}
                  style={styles.picture}
                />
              ) : (
                <ActivityIndicator />
              )}
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
      </View>
    );
  }
}

export default ElementListAds;
