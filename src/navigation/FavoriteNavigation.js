import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import FavoriteScreen from '../screens/FavoriteScreen';

import globalStyles from '../constants/globalStyles';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  clearAllButton: {
    color: 'white',
    fontSize: 17,
    marginRight: 10,
    fontFamily: globalStyles.gothamBook.fontFamily,
  },
});

const RightButton = () => (
  <TouchableOpacity>
    <Text style={styles.clearAllButton}>Clear all</Text>
  </TouchableOpacity>
);

const FavoriteNavigation = createStackNavigator({
  Home: {
    screen: FavoriteScreen,
    navigationOptions: {
      headerTitle: 'Favorites',
      headerTitleStyle: {
        fontSize: 17,
        fontFamily: globalStyles.gothamBold.fontFamily,
        lineHeight: 24,
        color: 'white',
        width: '100%',
        textAlign: 'center',
      },
      headerStyle: {
        backgroundColor: colors.HEADER,
        paddingTop: 10,
      },
      headerRight: <RightButton />,
    },
  },
});

export default FavoriteNavigation;
