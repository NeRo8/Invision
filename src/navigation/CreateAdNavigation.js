import { createStackNavigator } from 'react-navigation-stack';

import Step1Screen from '../screens/Ads/CreateAdScreens/Step1Screen';
import Step2Screen from '../screens/Ads/CreateAdScreens/Step2Screen';
import Step3Screen from '../screens/Ads/CreateAdScreens/Step3Screen';
import Step4Screen from '../screens/Ads/CreateAdScreens/Step4Screen';
import Step5Screen from '../screens/Ads/CreateAdScreens/Step5Screen';

import ChooseCategoryScreen from '../screens/Ads/CreateAdScreens/ChooseCategoryScreen';

import PayCardScreen from '../screens/Ads/PayCardScreen';
import MakePictureScreen from '../screens/Ads/MakePictureScreen';

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
    ChooseCategory: {
      screen: ChooseCategoryScreen,
      navigationOptions: {
        header: ({ navigation }) => (
          <HeaderChooseCategory navigation={navigation} />
        ),
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
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default CreateAdNavigation;
