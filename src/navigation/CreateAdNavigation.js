import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Step1Screen from '../screens/Ads/CreateAdScreens/Step1Screen';
import Step2Screen from '../screens/Ads/CreateAdScreens/Step2Screen';
import Step3Screen from '../screens/Ads/CreateAdScreens/Step3Screen';
import Step4Screen from '../screens/Ads/CreateAdScreens/Step4Screen';
import Step5Screen from '../screens/Ads/CreateAdScreens/Step5Screen';

import ChooseCategoryScreen from '../screens/Ads/CreateAdScreens/ChooseCategoryScreen';

import MakePictureScreen from '../screens/Ads/MakePictureScreen';

import { DefaultHeader } from '../components/Headers';
import { colors } from '../constants';

const CreateAdNavigation = createStackNavigator(
  {
    StepOne: {
      screen: Step1Screen,
      navigationOptions: {
        header: null,
      },
    },
    StepTwo: {
      screen: Step2Screen,
      navigationOptions: {
        header: null,
      },
    },
    StepThree: {
      screen: Step3Screen,
      navigationOptions: {
        header: null,
      },
    },
    StepFour: {
      screen: Step4Screen,
      navigationOptions: {
        header: null,
      },
    },
    StepFive: {
      screen: Step5Screen,
      navigationOptions: {
        header: null,
      },
    },
    ChooseCategory: {
      screen: ChooseCategoryScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Categories"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },

    MakePicture: {
      screen: MakePictureScreen,
      navigationOptions: {
        header: null,
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

export default CreateAdNavigation;
