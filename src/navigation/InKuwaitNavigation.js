import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';
import InKuwaitFAQScreen from '../screens/InKuwait/InKuwaitFAQScreen';
import InKuwaitFilterScreen from '../screens/InKuwait/InKuwaitFilterScreen';

import HeaderInKuwaitFAQ from '../components/HeaderInKuwaitFAQ';

import { colors } from '../constants/colors';
import globalStyles from '../constants/globalStyles';

const HeaderLeftIcon = ({ goBack }) => (
  <Icon
    name="chevron-left"
    type="material-community"
    color="white"
    size={32}
    onPress={() => goBack()}
  />
);

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
          <HeaderInKuwaitFAQ
            onPressBack={() => navigation.goBack()}
            navigation={navigation}
          />
        ),
        headerStyle: {
          paddingTop: 30,
          height: Platform.OS === 'ios' ? 90 : 120,
          backgroundColor: colors.HEADER,
        },
        headerLeft: null,
        headerRight: null,
      };
    },
  },
  InKuwaitFilter: {
    screen: InKuwaitFilterScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Filter',
        headerTitleStyle: {
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          color: 'white',
          flex: 1,
          marginRight: 70,
          textAlign: 'center',
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
          paddingTop: 15,
        },
        headerLeft: <HeaderLeftIcon goBack={() => navigation.goBack()} />,
      };
    },
  },
});

export default InKuwaitNavigation;
