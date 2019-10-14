import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';

const AdsNavigation = createStackNavigator({
  Home: {
    screen: InKuwaitScreen,
  },
});

export default AdsNavigation;
