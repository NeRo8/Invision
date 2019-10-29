import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import FavoriteScreen from '../screens/FavoriteScreen';

import globalStyles from '../constants/globalStyles';
import { colors } from '../constants/colors';

const RightButton = () => (
  <TouchableOpacity>
    <Text
      style={{
        color: 'white',
        fontSize: 17,
        marginRight: 10,
        fontFamily: globalStyles.gothamBook.fontFamily,
      }}>
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
        fontSize: 17,
        fontFamily: globalStyles.gothamBold.fontFamily,
        color: 'white',
        width: '100%',
        textAlign: 'center',
      },
      headerStyle: {
        paddingTop: 15,
        backgroundColor: colors.HEADER,
      },
      headerRight: <RightButton />,
    },
  },
});

export default FavoriteNavigation;
