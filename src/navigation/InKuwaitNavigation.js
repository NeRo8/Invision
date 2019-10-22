import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';
import InKuwaitFAQScreen from '../screens/InKuwaitFAQScreen';

import HeaderInKuwaitFAQ from '../components/HeaderInKuwaitFAQ';

import { colors } from '../constants/colors';

const InKuwaitNavigation = createStackNavigator({
  InKuwait: {
    screen: InKuwaitScreen,
    navigationOptions: {
      title: 'Living In Kuwait',
      headerTitleStyle: {
        marginTop: 10,
        marginLeft: 0,
        textAlign: 'center',
        width: '100%',
        fontSize: 17,
        fontFamily: 'Gotham-Bold',
        color: 'white',
        fontWeight: 'bold',
      },
      headerStyle: {
        height: 64,
        backgroundColor: colors.HEADER,
      },
    },
  },
  InKuwaitFAQ: {
    screen: InKuwaitFAQScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <HeaderInKuwaitFAQ onPressBack={() => navigation.goBack()} />
        ),
        headerStyle: {
          height: 90,
          backgroundColor: colors.HEADER,
        },
        headerLeft: null,
        headerRight: null,
      };
    },
  },
});

export default InKuwaitNavigation;
