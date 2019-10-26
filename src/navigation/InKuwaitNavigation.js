import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';
import InKuwaitFAQScreen from '../screens/InKuwaitFAQScreen';

import HeaderInKuwaitFAQ from '../components/HeaderInKuwaitFAQ';

import { colors } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

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
        fontFamily: globalStyles.gothamBold.fontFamily,
        color: 'white',
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
