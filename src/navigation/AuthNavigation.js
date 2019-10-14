import { createStackNavigator } from 'react-navigation-stack';

import Auth from '../screens/Auth';

const AdsNavigation = createStackNavigator({
  Home: {
    screen: Auth,
  },
});

export default AdsNavigation;
