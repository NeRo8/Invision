import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import FiltersScreen from '../screens/FiltersScreen';

import HeaderAds from '../components/HeaderAds';
import HeaderAdsFilters from '../components/HeaderAdsFilters';

import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import ProductScreen from '../screens/Ads/ProductScreen';

import { colors } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

const styles = StyleSheet.create({
  btnCancel: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

const HeaderLeft = ({ onPressCancel }) => (
  <TouchableOpacity
    onPress={() => {
      onPressCancel();
    }}>
    <Text style={[styles.btnCancel, globalStyles.gothamBook]}>Cancel</Text>
  </TouchableOpacity>
);

const HeaderRight = ({ onPressConfirm }) => (
  <TouchableOpacity onPress={() => {}}>
    <Text style={styles.btnCancel}>Done</Text>
  </TouchableOpacity>
);

const AdsNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
          headerTitle: 'Filters',
          headerStyle: {
            paddingTop: 20,
            height: 70,
            backgroundColor: colors.HEADER,
          },
          headerTitleStyle: {
            textAlign: 'center',
            width: '100%',
            paddingRight: 90,
            color: 'white',
            fontWeight: 'bold',
          },
          headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
            height: Platform.OS === 'ios' ? 110 : 130,
            backgroundColor: colors.HEADER,
          },
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    ProductDetail: {
      screen: ProductScreen,
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
