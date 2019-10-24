import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettings from '../screens/ProfileSettings';
import { colors } from '../constants/colors';

const ProfileNavigation = createStackNavigator({
  Home: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProfileSettings: {
    screen: ProfileSettings,
    navigationOptions: {
      headerTitle: 'Favorites',
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
    }
  },
}
);

export default ProfileNavigation;
