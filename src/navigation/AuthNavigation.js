import { createStackNavigator } from 'react-navigation-stack';

import Auth from '../screens/Auth';

const AuthNavigation = createStackNavigator({
  Home: {
    screen: Auth,
    navigationOptions: {
      header: null,
    },
  },
});

export default AuthNavigation;
