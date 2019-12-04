import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { Platform } from 'react-native';

import Auth from '../screens/Auth';
import SignInScreen from '../screens/Auth/SignInScreen';
// import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';
import ChooseCategoryScreen from '../screens/Auth/ChooseCategoryScreen/ChooseCategoryScreen';
import HeaderChooseCategory from '../screens/Auth/ChooseCategoryScreen/HeaderChooseCategory';
import PayCardScreen from '../screens/Auth/PayCardScreen';
import MakePictureScreen from '../screens/Auth/MakePictureScreen/MakePictureScreen';

import Step1Screen from '../screens/Auth/PassportScreens/Step1Screen';
import Step2Screen from '../screens/Auth/PassportScreens/Step2Screen';
import Step3Screen from '../screens/Auth/PassportScreens/Step3Screen';
import Step4Screen from '../screens/Auth/PassportScreens/Step4Screen';
import Step5Screen from '../screens/Auth/PassportScreens/Step5Screen';

import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import HeaderCreateAccount from '../components/HeaderCreateAccount';
import HeaderPay from '../components/HeaderPay';

import { colors, globalStyles } from '../constants';

const HeaderLeft = ({ onBack }) => (
  <Icon
    name="chevron-left"
    type="feather"
    size={32}
    color="white"
    underlayColor="transparent"
    onPress={() => {
      onBack();
    }}
    containerStyle={{ paddingTop: 10 }}
  />
);

const PassportNavigation = createStackNavigator(
  {
    StepOne: {
      screen: Step1Screen,
    },
    StepTwo: {
      screen: Step2Screen,
    },
    StepThree: {
      screen: Step3Screen,
    },
    StepFour: {
      screen: Step4Screen,
    },
    StepFive: {
      screen: Step5Screen,
    },
    ChooseCategory: {
      screen: ChooseCategoryScreen,
      navigationOptions: {
        header: ({ navigation }) => (
          <HeaderChooseCategory navigation={navigation} />
        ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const PayNavigation = createStackNavigator(
  {
    PayCard: {
      screen: PayCardScreen,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AuthNavigation = createStackNavigator({
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
        title: 'Forgot password',
        headerTitleStyle: {
          fontFamily: 'Gotham-Bold',
          color: 'white',
          paddingTop: 10,
          flex: 1,
          textAlign: 'center',
          marginRight: 40,
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
  CreateAccount: {
    screen: PassportNavigation,
    navigationOptions: ({ navigation }) => {
      let index = 1;
      let headerVisible = null;
      let routeName = navigation.state.routes[navigation.state.index].routeName;

      switch (routeName) {
        case 'StepOne': {
          index = 1;
          break;
        }
        case 'StepTwo': {
          index = 2;
          break;
        }
        case 'StepThree': {
          index = 3;
          break;
        }
        case 'StepFour': {
          index = 4;
          break;
        }
        case 'StepFive': {
          index = 5;
          break;
        }
        case 'ChooseCategory': {
          return {
            headerTitle: <HeaderCreateAccount index={index} />,
            headerLeft: null,
            headerStyle: {
              backgroundColor: colors.HEADER,
              height: 65,
            },
            header: headerVisible,
          };
        }
        default: {
          index = 1;
        }
      }
      return {
        headerTitle: <HeaderCreateAccount index={index} />,
        headerLeft: null,
        headerStyle: {
          backgroundColor: colors.HEADER,
          height: 65,
        },
      };
    },
  },
  Pay: {
    screen: PayNavigation,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: <HeaderPay navigation={navigation} />,
        headerStyle: {
          height: 110,
          backgroundColor: colors.HEADER,
        },
        headerLeft: null,
      };
    },
  },
  MakePicture: {
    screen: MakePictureScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default AuthNavigation;
