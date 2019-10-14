import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import AdsNavigation from './AdsNavigation';
import InKuwaitNavigation from './InKuwaitNavigation';
import AuthNavigation from './AuthNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import ProfileNavigation from './ProfileNavigation';

import { colors } from '../constants/colors';

const Navigation = createBottomTabNavigator(
  {
    Home: {
      screen: AdsNavigation,
    },
    InKuwait: {
      screen: InKuwaitNavigation,
    },
    Auth: {
      screen: AuthNavigation,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon
            name="ios-add-circle"
            type="ionicon"
            color={tintColor}
            size={28}
          />
        ),
      },
    },
    Favorite: {
      screen: FavoriteNavigation,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-heart" type="ionicon" color={tintColor} size={28} />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigation,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-contact" type="ionicon" color={tintColor} size={28} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.ACTIVE,
      inactiveTintColor: colors.UNACTIVE,
      labelStyle: {
        fontSize: 14,
      },
      tabStyle: {
        paddingTop: 5,
      },
    },
  },
);

export default Navigation;
