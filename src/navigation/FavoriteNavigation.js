import { createStackNavigator } from 'react-navigation-stack';

import FavoriteScreen from '../screens/FavoriteScreen';

const FavoriteNavigation = createStackNavigator({
  Home: {
    screen: FavoriteScreen,
  },
});

export default FavoriteNavigation;
