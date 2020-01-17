import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import AdsScreen from '../screens/Favorite/Ads';
import ServicesScreen from '../screens/Favorite/Services';
import EventsScreen from '../screens/Favorite/Events';

import { FavoriteHeader } from '../components/Headers';

import { colors } from '../constants';

import { translate } from '../i18n';

const FavoriteNavigation = createMaterialTopTabNavigator(
  {
    Ads: {
      screen: AdsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: translate('ads'),
        };
      },
    },
    Services: {
      screen: ServicesScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: translate('orgAndServices'),
        };
      },
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: translate('events'),
        };
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
