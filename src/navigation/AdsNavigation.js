import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import AdsScreen from '../screens/AdsScreen';
import FiltersScreen from '../screens/Ads/FiltersScreen';
import CategoryScreen from '../screens/Ads/CategoryScreen';
import ProductScreen from '../screens/Ads/ProductScreen';
import CreateCommentScreen from '../screens/Ads/CreateCommentScreen';
import ProductBuyerProfile from '../screens/Ads/ProductBuyerProfile';
import CreateAdNavigation from './CreateAdNavigation';

import HeaderAds from '../components/HeaderAds';
import HeaderAdsFilters from '../components/HeaderAdsFilters';
import HeaderCreateAccount from '../components/HeaderCreateAccount';

import { DefaultHeader } from '../components/Headers';

import { colors } from '../constants';

const AdsNavigation = createStackNavigator(
  {
    Home: {
      screen: AdsScreen,
      navigationOptions: {
        headerTitle: <HeaderAds />,
        headerStyle: {
          height: Platform.OS === 'ios' ? 95 : 110,
          backgroundColor: colors.HEADER,
        },
        headerTintColor: 'white',
      },
    },
    Category: {
      screen: CategoryScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Filters"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    Filters: {
      screen: FiltersScreen,
      navigationOptions: ({ navigation }) => {
        return {
          gesturesEnabled: false,
          headerTitle: <HeaderAdsFilters />,
          headerStyle: {
            paddingTop: 10,
            height: Platform.OS === 'ios' ? 150 : 174,
            backgroundColor: colors.HEADER,
          },
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProductDetail: {
      screen: ProductScreen,
      navigationOptions: {
        header: null,
      },
    },
    CreateComment: {
      screen: CreateCommentScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Write comment"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProductBuyerProfile: {
      screen: ProductBuyerProfile,
      navigationOptions: {
        header: null,
      },
    },
    CreateAd: {
      screen: CreateAdNavigation,
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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
    },
  },
);

export default AdsNavigation;
