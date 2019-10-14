import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';

const InKuwaitNavigation = createStackNavigator({
  Home: {
    screen: InKuwaitScreen,
  },
});

export default InKuwaitNavigation;
