import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import AdsScreen from '../screens/AdsScreen';
import FiltersScreen from '../screens/Ads/FiltersScreen';
import CategoryScreen from '../screens/Ads/CategoryScreen';
import ProductScreen from '../screens/Ads/ProductScreen';
import CreateCommentScreen from '../screens/Ads/CreateCommentScreen';
import ProductSellerProfile from '../screens/Ads/ProductSellerProfile';

import AdsHeader from '../components/Headers/AdsHeader';
import AdsFiltersHeader from '../components/Headers/AdsFiltersHeader';

import { DefaultHeader } from '../components/Headers';

import { colors } from '../constants';

import { translate } from '../i18n';

const AdsNavigation = createStackNavigator(
  {
    Home: {
      screen: AdsScreen,
      navigationOptions: {
        headerTitle: <AdsHeader />,
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
              title={translate('filters')}
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
          headerTitle: <AdsFiltersHeader />,
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
              title={translate('writeComment')}
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProductSellerProfile: {
      screen: ProductSellerProfile,
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

export default AdsNavigation;
