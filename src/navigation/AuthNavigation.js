import { createStackNavigator } from 'react-navigation-stack';

import Auth from '../screens/Auth';
import SignInScreen from '../screens/Auth/SignInScreen';

const AuthNavigation = createStackNavigator({
  Home: {
    screen: Auth,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {},
  },
});

export default AuthNavigation;
