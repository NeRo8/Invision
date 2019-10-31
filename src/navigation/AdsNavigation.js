import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import FiltersScreen from '../screens/FiltersScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import ProductScreen from '../screens/Ads/ProductScreen';
import CreateCommentScreen from '../screens/Ads/CreateCommentScreen';

import HeaderAds from '../components/HeaderAds';
import HeaderAdsFilters from '../components/HeaderAdsFilters';
import HeaderProduct from '../components/HeaderProduct';

import { colors } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

const styles = StyleSheet.create({
  btnCancel: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: 10,
  },
});

const HeaderLeft = ({ onPressCancel }) => (
  <TouchableOpacity
    onPress={() => {
      onPressCancel();
    }}>
    <Text style={[globalStyles.gothamBook, styles.btnCancel]}>Cancel</Text>
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
            paddingTop: 10,
            backgroundColor: colors.HEADER,
          },
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            marginRight: Platform.OS === 'ios' ? 0 : 60,
            color: 'white',
            fontFamily: 'Gotham-Bold',
            fontSize: 17,
          },
          headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        headerLeft: null,
        headerTitle: <HeaderProduct />,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
    CreateComment: {
      screen: CreateCommentScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Write comment',
          headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'Gotham-Bold',
            color: 'white',
            paddingTop: 15,
            width: '100%',
            paddingRight: 60,
          },
          headerLeft: (
            <Icon
              name="chevron-left"
              type="material-community"
              size={32}
              color="white"
              containerStyle={{
                paddingTop: 15,
                width: 50,
              }}
              onPress={() => navigation.goBack()}
            />
          ),
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
