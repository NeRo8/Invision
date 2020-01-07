import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Step1Screen from '../screens/Ads/CreateAdScreens/Step1Screen';
import Step2Screen from '../screens/Ads/CreateAdScreens/Step2Screen';
import Step3Screen from '../screens/Ads/CreateAdScreens/Step3Screen';
import Step4Screen from '../screens/Ads/CreateAdScreens/Step4Screen';
import Step5Screen from '../screens/Ads/CreateAdScreens/Step5Screen';

import ChooseCategoryScreen from '../screens/Ads/CreateAdScreens/ChooseCategoryScreen';

import MakePictureScreen from '../screens/Ads/MakePictureScreen';

import { CreateAdHeader } from '../components/Headers';

import { DefaultHeader } from '../components/Headers';
import { colors } from '../constants';

const CreateAdNavigation = createStackNavigator(
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
    //Support Navigation
    ChooseCategory: {
      screen: ChooseCategoryScreen,
    },
    MakePicture: {
      screen: MakePictureScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      let index = 1;
      let activeScreen = navigation.state.routeName;

      switch (activeScreen) {
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
            headerTitle: (
              <DefaultHeader
                title="Categories"
                leftIcon={true}
                onPressLeftIcon={() => navigation.goBack()}
              />
            ),
            headerLeft: null,
            headerStyle: {
              backgroundColor: colors.HEADER,
            },
          };
        }
      }
      return {
        header: <CreateAdHeader index={index} />,
        headerLeft: null,
        headerStyle: {
          //backgroundColor: colors.HEADER,
        },
      };
    },
  },
);

export default CreateAdNavigation;
