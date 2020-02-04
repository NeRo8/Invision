import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import AuthScreen from '../screens/Auth';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
//import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';
import AuthHeader from '../components/Headers/AuthHeader';

import { DefaultHeader } from '../components/Headers';

import { colors } from '../constants';
import { translate } from '../i18n';

const SingInNavigation = createMaterialTopTabNavigator(
  {
    SingIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
  },
  {
    tabBarComponent: AuthHeader,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: colors.HEADER,
    },
  },
);

const AuthNavigation = createStackNavigator(
  {
    Home: {
      screen: AuthScreen,
      navigationOptions: {
        header: null,
      },
    },
    Auth: {
      screen: SingInNavigation,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title={translate('forgotPassword')}
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    /** Delete this screen, don't yoused now.
    NewPassword: {
      screen: NewPasswordScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader title={translate('newPassword')} leftIcon={null} />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
     */
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
