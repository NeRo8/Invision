import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

import AdsScreen from '../screens/AdsScreen';
import FiltersScreen from '../screens/Ads/FiltersScreen';
import CategoryScreen from '../screens/Ads/CategoryScreen';
import ProductScreen from '../screens/Ads/ProductScreen';
import CreateCommentScreen from '../screens/Ads/CreateCommentScreen';
import ProductBuyerProfile from '../screens/Ads/ProductBuyerProfile';

import HeaderAds from '../components/HeaderAds';
import HeaderAdsFilters from '../components/HeaderAdsFilters';

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
