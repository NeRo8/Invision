import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { Grayscale } from 'react-native-color-matrix-image-filters';

import styles from './styles';
import { globalStyles } from '../../constants';

const ElementFL = ({ item, showOption, grayscale }) => {
  if (grayscale) {
    return (
      <Grayscale style={{ flex: 1 }}>
        <ImageBackground
          style={styles.elementContainer}
          source={require('../../assets/images/background-phone.jpg')}>
          <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  marginLeft: 40,
                  flex: 1,
                  paddingTop: 25,
                }}>
                <Text
                  style={[
                    globalStyles.gothamMediumRegular,
                    styles.fontDescription,
                  ]}>
                  Whole every miles as tiled at seven or. Wished he entire
                  esteem mr oh by.
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
                  onPress={() => showOption(true)}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={[globalStyles.gothamBook]}>$150</Text>
              <Text style={[globalStyles.gothamBook]}>01.03.05</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[globalStyles.gothamBook]}>10</Text>
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
      </Grayscale>
    );
  }
  return (
    <ImageBackground
      style={styles.elementContainer}
      source={require('../../assets/images/background-phone.jpg')}>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginLeft: 40,
              flex: 1,
              paddingTop: 25,
            }}>
            <Text
              style={[
                globalStyles.gothamMediumRegular,
                styles.fontDescription,
              ]}>
              Whole every miles as tiled at seven or. Wished he entire esteem mr
              oh by.
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
              onPress={() => showOption(true)}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 44,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[globalStyles.gothamBook]}>$150</Text>
          <Text style={[globalStyles.gothamBook]}>01.03.05</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[globalStyles.gothamBook]}>10</Text>
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
};

export default ElementFL;
