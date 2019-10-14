import { createBottomTabNavigator } from 'react-navigation-tabs';

import AdsNavigation from './AdsNavigation';
import InKuwaitNavigation from './InKuwaitNavigation';
import AuthNavigation from './AuthNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import ProfileNavigation from './ProfileNavigation';

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
  Favorite: {
    screen: FavoriteNavigation,
  },
  Profile: {
    screen: ProfileNavigation,
  },
});

export default Navigation;
