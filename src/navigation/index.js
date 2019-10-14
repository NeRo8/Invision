import { createBottomTabNavigator } from 'react-navigation-tabs';

import AdsNavigation from './AdsNavigation';
import InKuwaitNavigation from './InKuwaitNavigation';
import AuthNavigation from './AuthNavigation';

const Navigation = createBottomTabNavigator({
  Home: {
    screen: AdsNavigation,
  },
  InKuwait: {
    screen: InKuwaitNavigation,
  },
  Auth: {
    screen: AuthNavigation,
  },
});

export default Navigation;
