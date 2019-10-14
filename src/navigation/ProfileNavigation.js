import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../screens/ProfileScreen';

const ProfileNavigation = createStackNavigator({
  Home: {
    screen: ProfileScreen,
  },
});

export default ProfileNavigation;
