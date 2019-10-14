import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import FiltersScreen from '../screens/FiltersScreen';

import HeaderAds from '../components/HeaderAds';

import { colors } from '../constants/colors';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';

const styles = StyleSheet.create({
  btnCancel: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
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

const AdsNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: <HeaderAds />,
        headerStyle: {
          height: 100,
          backgroundColor: colors.HEADER,
        },
        headerBackTitle: 'Cancel',
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
      navigationOptions: {},
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
