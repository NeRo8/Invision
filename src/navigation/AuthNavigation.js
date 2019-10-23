import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';

import Auth from '../screens/Auth';
// import SignInScreen from '../screens/Auth/SignInScreen';
// import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import { colors } from '../constants/colors';

const AuthNavigation = createStackNavigator({
  Home: {
    screen: Auth,
    navigationOptions: {
      header: null,
    },
  },
  // SignIn: {
  //   screen: SignInScreen,
  //   navigationOptions: {
  //     headerTitle: <HeaderSignIn />,
  //     headerStyle: {
  //       height: 100,
  //       backgroundColor: colors.HEADER,
  //     },
  //     headerLeft: null,
  //     headerRight: null,
  //   },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: <HeaderSignIn />,
      headerStyle: {
        height: 100,
        backgroundColor: colors.HEADER,
      },
      headerLeft: null,
      headerRight: null,
    },
  },
});

export default AuthNavigation;
