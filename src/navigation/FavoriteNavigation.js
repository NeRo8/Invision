import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import FavoriteScreen from '../screens/FavoriteScreen';

import { colors } from '../constants/colors';

const RightButton = () => (
  <TouchableOpacity>
    <Text style={{ color: 'white', fontSize: 17, marginRight: 10 }}>
      Clear all
    </Text>
  </TouchableOpacity>
);

const FavoriteNavigation = createStackNavigator({
  Home: {
    screen: FavoriteScreen,
    navigationOptions: {
      headerTitle: 'Favorites',
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
      headerRight: <RightButton />,
    },
  },
});

export default FavoriteNavigation;
