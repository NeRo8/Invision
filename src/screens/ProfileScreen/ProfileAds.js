import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { Grayscale } from 'react-native-color-matrix-image-filters';

import styles from './styles';
import moment from 'moment';

const Element = ({ element, onPressDots }) => (
  <ImageBackground
    style={styles.elementContainer}
    source={{ uri: element.primary_image }}>
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            marginLeft: 40,
            flex: 1,
            paddingTop: 25,
          }}>
          <Text style={styles.fontDescription}>
            {element.description.slice(0, 250)}
          </Text>
        </View>
        <View
          style={{
            marginRight: 25,
            marginTop: 36,
            marginLeft: 25,
          }}>
          <Icon
            name="dots-vertical"
            type="material-community"
            containerStyle={styles.iconDots}
            onPress={() => onPressDots(true, element)}
          />
        </View>
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.label}>
          {`${element.price} ${element.currency.toUpperCase()}`}
        </Text>
        <Text style={styles.label}>
          {moment(element.publish_date).format('DD.MM.YY')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.label}>{element.message_count}</Text>
          <Icon
            name="ios-mail"
            type="ionicon"
            color="silver"
            containerStyle={{ marginLeft: 5 }}
          />
        </View>
      </View>
    </View>
  </ImageBackground>
);

const ElementFL = ({ item, showOption, grayscale }) => {
  if (grayscale) {
    return (
      <Grayscale style={{ flex: 1 }}>
        <Element element={item} onPressDots={showOption} />
      </Grayscale>
    );
  }
  return <Element element={item} onPressDots={showOption} />;
};

export default ElementFL;
