import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import AdsScreen from '../screens/Favorite/Ads';
import ServicesScreen from '../screens/Favorite/Services';
import EventsScreen from '../screens/Favorite/Events';

import { FavoriteHeader } from '../components/Headers';

import { colors } from '../constants';

const FavoriteNavigation = createMaterialTopTabNavigator(
  {
    Ads: {
      screen: AdsScreen,
      navigationOptions: {
        title: 'Ads',
      },
    },
    Services: {
      screen: ServicesScreen,
      navigationOptions: {
        title: 'Org/Services',
      },
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        title: 'Events',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.HEADER,
      inactiveTintColor: 'white',
    },
    tabBarComponent: FavoriteHeader,
  },
);

export default FavoriteNavigation;
