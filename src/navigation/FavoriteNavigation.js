import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import FavoriteScreen from '../screens/FavoriteScreen';

import { DefaultHeader } from '../components/Headers';

import { colors } from '../constants';
import { gothamBook } from '../constants/fonts';

const FavoriteNavigation = createStackNavigator(
  {
    Home: {
      screen: FavoriteScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Favorites"
              rightIcon={
                <TouchableOpacity
                  onPress={navigation.getParam('deleteFavorites')}>
                  <Text
                    style={{
                      ...gothamBook,
                      color: 'white',
                      fontSize: 17,
                      paddingTop: 5,
                      textAlign: 'right',
                      marginRight: 10,
                    }}>
                    Clear all
                  </Text>
                </TouchableOpacity>
              }
            />
          ),
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

export default FavoriteNavigation;
