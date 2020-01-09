import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import Auth from '../screens/Auth';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';
import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';

import { DefaultHeader } from '../components/Headers';

import { colors } from '../constants';

const AuthNavigation = createStackNavigator(
  {
    Home: {
      screen: Auth,
      navigationOptions: {
        header: null,
      },
    },
    SignIn: {
      screen: SignInScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <HeaderSignIn activeScreen={true} />,
          headerStyle: {
            height: Platform.OS === 'ios' ? 80 : 100,
            backgroundColor: colors.HEADER,
          },
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerTitle: <HeaderSignIn activeScreen={false} />,
        headerStyle: {
          height: Platform.OS === 'ios' ? 80 : 100,
          backgroundColor: colors.HEADER,
        },
        headerLeft: null,
        headerRight: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Forgot Password"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    NewPassword: {
      screen: NewPasswordScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <DefaultHeader title="New password" leftIcon={null} />,
          headerLeft: null,
          headerRight: null,
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
    },
  },
);

export default AuthNavigation;
