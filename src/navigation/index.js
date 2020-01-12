import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import AdsNavigation from './AdsNavigation';
import InKuwaitNavigation from './InKuwaitNavigation';
import AuthNavigation from './AuthNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import ProfileNavigation from './ProfileNavigation';
import CreateAdNavigation from './CreateAdNavigation';

import { colors } from '../constants';

import { store } from '../redux/store';

const Navigation = createBottomTabNavigator(
  {
    Home: {
      screen: AdsNavigation,
      navigationOptions: ({ navigation }) => {
        //title: 'Ads',
        let tabBarVisible = false;
        let routeName =
          navigation.state.routes[navigation.state.index].routeName;
        if (routeName === 'Home') {
          tabBarVisible = true;
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
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = false;
        let routeName =
          navigation.state.routes[navigation.state.index].routeName;
        if (routeName === 'InKuwait') {
          tabBarVisible = true;
        }
        return {
          tabBarVisible,
          title: 'In Kuwait',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon
              name="building"
              type="font-awesome"
              color={tintColor}
              size={28}
            />
          ),
        };
      },
    },
    CreateAd: {
      screen: CreateAdNavigation,
      navigationOptions: ({ navigation }) => {
        //title: 'Ads',
        let tabBarVisible = false;
        return {
          tabBarVisible,
          title: 'Add ad',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon
              name="ios-add-circle"
              type="ionicon"
              color={tintColor}
              size={28}
            />
          ),
        };
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
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = false;
        let routeName =
          navigation.state.routes[navigation.state.index].routeName;
        if (routeName === 'Home') {
          tabBarVisible = true;
        }
        return {
          tabBarVisible,
          title: 'Profile',
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon
              name="account-circle"
              type="material-community"
              color={tintColor}
              size={28}
            />
          ),
        };
      },
    },
  },
  {
    //initialRouteName: 'Profile',
    defaultNavigationOptions: {
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

      tabBarOnPress: ({ navigation, defaultHandler }) => {
        const { authStatus } = store.getState().auth;
        const { routeName } = navigation.state;

        if (routeName === 'CreateAd') {
          if (!authStatus) {
            navigation.navigate('Auth');
            return;
          }
        }

        defaultHandler();
      },
    },
  },
);

const MainNavigation = createStackNavigator(
  {
    Main: Navigation,
    Auth: AuthNavigation,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainNavigation);
