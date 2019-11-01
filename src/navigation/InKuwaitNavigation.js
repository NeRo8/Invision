import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';
import InKuwaitFAQScreen from '../screens/InKuwait/FAQ/InKuwaitFAQScreen';
import InKuwaitFilterScreen from '../screens/InKuwait/FAQ/InKuwaitFilterScreen';
import InKuwaitAskScreen from '../screens/InKuwait/FAQ/InKuwaitAskScreen';

import NewsScreen from '../screens/InKuwait/News/NewsScreen';
import NewsArticleScreen from '../screens/InKuwait/News/NewsArticleScreen/';
import ArticleComentsScreen from '../screens/InKuwait/News/ArticleComentsScreen/';
import NewsWriteComment from '../screens/InKuwait/News/NewsWriteComment';

import HeaderInKuwaitFAQ from '../components/HeaderInKuwaitFAQ';
import HeaderInKuwaitNews from '../components/HeaderInKuwaitNews';

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
  InKuwaitAsk: {
    screen: InKuwaitAskScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Ask question',
        headerTitleStyle: {
          flex: 1,
          textAlign: 'center',
          marginRight: 70,
          fontFamily: globalStyles.gothamBold.fontFamily,
          color: 'white',
        },
        headerStyle: {
          paddingTop: 15,
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon goBack={() => navigation.goBack()} />,
      };
    },
  },
  InKuwaitNews: {
    screen: NewsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <HeaderInKuwaitNews
            onPressBack={() => navigation.goBack()}
            onPressFilter={() => navigation.goBack()}
          />
        ),
        headerStyle: {
          paddingTop: 30,
          height: 132,
          backgroundColor: colors.HEADER,
        },
        headerLeft: null,
        headerRight: null,
      };
    },
  },
  NewsArticle: {
    screen: NewsArticleScreen,
    navigationOptions: {
      header: null,
    },
  },
  ArticleComents: {
    screen: ArticleComentsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Coments',
        headerTitleStyle: {
          textAlign: 'center',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
          color: 'white',
          width: '100%',
          paddingRight: 60,
        },
        headerLeft: (
          <Icon
            name="chevron-left"
            type="feather"
            size={32}
            color="white"
            containerStyle={{
              width: 50,
            }}
            onPress={() => navigation.goBack()}
          />
        ),
        headerStyle: {
          paddingTop: 15,
          height: Platform.OS === 'ios' ? 64 : 64,
          backgroundColor: colors.HEADER,
        },
        headerTitleContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    },
  },
  NewsWriteComment: {
    screen: NewsWriteComment,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Write comment',
        headerTitleStyle: {
          textAlign: 'center',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
          color: 'white',
          width: '100%',
          paddingRight: 60,
        },
        headerLeft: (
          <Icon
            name="chevron-left"
            type="feather"
            size={32}
            color="white"
            containerStyle={{
              width: 50,
            }}
            onPress={() => navigation.goBack()}
          />
        ),
        headerStyle: {
          paddingTop: 15,
          height: Platform.OS === 'ios' ? 64 : 64,
          backgroundColor: colors.HEADER,
        },
        headerTitleContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    },
  },
});

export default InKuwaitNavigation;
