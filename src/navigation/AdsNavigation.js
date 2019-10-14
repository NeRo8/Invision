import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';

const AdsNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default AdsNavigation;
