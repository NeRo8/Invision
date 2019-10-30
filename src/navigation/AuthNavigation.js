import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import Auth from '../screens/Auth';
import SignInScreen from '../screens/Auth/SignInScreen';
// import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Auth/NewPasswordScreen';

import Step1Screen from '../screens/AddAd/PassportScreens/Step1Screen';
import Step2Screen from '../screens/AddAd/PassportScreens/Step2Screen';
import Step3Screen from '../screens/AddAd/PassportScreens/Step3Screen';
import Step4Screen from '../screens/AddAd/PassportScreens/Step4Screen';
import Step5Screen from '../screens/AddAd/PassportScreens/Step5Screen';

import HeaderSignIn from '../components/HeaderSignIn/HeaderSignIn';
import HeaderCreateAccount from '../components/HeaderCreateAccount';

import { colors } from '../constants/colors';
import globalStyles from '../constants/globalStyles';
import ChooseCategoryScreen from '../screens/AddAd/ChooseCategoryScreen/ChooseCategoryScreen';
import HeaderChooseCategory from '../screens/AddAd/ChooseCategoryScreen/HeaderChooseCategory';

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
    CreateAccount: {
      screen: PassportNavigation,
      navigationOptions: ({ navigation }) => {
        let index = 1;
        let headerVisible = null;
        let routeName =
          navigation.state.routes[navigation.state.index].routeName;

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
  },
  {
    headerMode: 'float',
  },
);

export default AuthNavigation;
