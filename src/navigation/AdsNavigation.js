import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';

import HeaderAds from '../components/HeaderAds';

import { colors } from '../constants/colors';

const AdsNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: <HeaderAds />,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 100,
        backgroundColor: colors.HEADER,
      },
    },
  },
);

export default AdsNavigation;
