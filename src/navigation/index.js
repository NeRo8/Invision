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
      navigationOptions: ({ navigation }) => {
        //title: 'Ads',
        let tabBarVisible = true;
        let routeName =
          navigation.state.routes[navigation.state.index].routeName;
        if (routeName === 'Filters' || routeName === 'Category') {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          title: 'Ads',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon
              name="calendar-multiple"
              type="material-community"
              color={tintColor}
              size={28}
            />
          ),
        };
      },
    },
    InKuwait: {
      screen: InKuwaitNavigation,
      navigationOptions: {
        title: 'In Kuwait',
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon
            name="hospital-building"
            type="material-community"
            color={tintColor}
            size={28}
          />
        ),
      },
    },
    Auth: {
      screen: AuthNavigation,
      navigationOptions: {
        title: 'Add ad',
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
        title: 'Favorites',
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-heart" type="ionicon" color={tintColor} size={28} />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigation,
      navigationOptions: {
        title: 'Profile',
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
