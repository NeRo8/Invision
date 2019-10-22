import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import FiltersScreen from '../screens/FiltersScreen';

import HeaderAds from '../components/HeaderAds';
import HeaderAdsFilters from '../components/HeaderAdsFilters';

import { colors } from '../constants/colors';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';

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
    <Text style={styles.btnCancel}>Cancel</Text>
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
          headerTitleStyle: {
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
            height: 110,
            backgroundColor: colors.HEADER,
          },
          headerLeft: null,
          headerRight: null,
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
