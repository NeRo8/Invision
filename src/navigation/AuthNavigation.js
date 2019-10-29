import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import Auth from '../screens/Auth';
import SignInScreen from '../screens/Auth/SignInScreen';
// import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';

import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';

import { colors } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

const HeaderLeft = ({ onBack }) => (
  <Icon
    name="chevron-left"
    type="material-community"
    size={32}
    color="white"
    underlayColor="transparent"
    onPress={() => {
      onBack();
    }}
  />
);

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
            height: 80,
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
          height: 80,
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
          title: 'Forgot password',
          headerTitleStyle: {
            fontFamily: 'Gotham-Bold',
            color: 'white',
          },
          headerStyle: {
            backgroundColor: colors.HEADER,
          },
          headerLeft: <HeaderLeft onBack={navigation.goBack} />,
        };
      },
    },
    NewPassword: {
      screen: NewPasswordScreen,
      navigationOptions: {
        title: 'New password',
        headerTitleStyle: {
          marginHorizontal: 0,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Gotham-Bold',
          fontSize: 17,
          color: 'white',
        },
        headerStyle: {
          paddingTop: 15,
          backgroundColor: colors.HEADER,
        },
        headerLeft: null,
      },
    },
  },
  {
    headerMode: 'float',
  },
);

export default AuthNavigation;
