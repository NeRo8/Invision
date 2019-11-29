import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

//FAQ
import InKuwaitScreen from '../screens/InKuwaitScreen';
import InKuwaitFAQScreen from '../screens/InKuwait/FAQ/InKuwaitFAQScreen';
import InKuwaitFilterScreen from '../screens/InKuwait/FAQ/InKuwaitFilterScreen';
import InKuwaitAskScreen from '../screens/InKuwait/FAQ/InKuwaitAskScreen';
import InKuwaitDetailScreen from '../screens/InKuwait/FAQ/InKuwaitDetailScreen';
import InKuwaitAnswersScreen from '../screens/InKuwait/FAQ/InKuwaitAnswersScreen';
import InKuwaitCreateCommentScreen from '../screens/InKuwait/FAQ/InKuwaitCreateCommentScreen';

//Events
import EventsScreen from '../screens/InKuwait/Events/EventsScreen';
import EventsFilter from '../screens/InKuwait/Events/EventsFilter';
import EventsMap from '../screens/InKuwait/Events/EventsMap';
import EventsDetail from '../screens/InKuwait/Events/EventsDetail';

//News
import NewsScreen from '../screens/InKuwait/News/NewsScreen';
import NewsArticleScreen from '../screens/InKuwait/News/NewsArticleScreen/';
import ArticleComentsScreen from '../screens/InKuwait/News/ArticleComentsScreen/';
import NewsWriteComment from '../screens/InKuwait/News/NewsWriteComment';
import NewsFilterScreen from '../screens/InKuwait/News/NewsFilterScreen';

import OrganisationAndServicesScreen from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesScreen';
import OrganisationAndServicesFilter from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesFilter';
import OrganisationServiceDetail from '../screens/InKuwait/OrganisationAndServices/OrganisationServiceDetail';
import OrganisationMap from '../screens/InKuwait/OrganisationAndServices/OrganisationMap/OrganisationMap';

import HeaderInKuwaitFAQ from '../components/HeaderInKuwaitFAQ';
import HeaderInKuwaitNews from '../components/HeaderInKuwaitNews';
import HeaderInKuwaitEvents from '../components/HeaderInKuwaitEvents';

import { colors, globalStyles } from '../constants';

import { DefaultHeader } from '../components/Headers';

const HeaderLeftIcon = ({ goBack }) => (
  <Icon
    name="chevron-left"
    type="material-community"
    underlayColor="transparent"
    color="white"
    size={32}
    onPress={() => goBack()}
  />
);

const ServicesNavigation = createStackNavigator(
  {
    OrganisationAndServices: {
      screen: OrganisationAndServicesScreen,
      navigationOptions: {
        header: null,
      },
    },
    OrganisationAndServicesFilter: {
      screen: OrganisationAndServicesFilter,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Filter"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    OrganisationServiceDetail: {
      screen: OrganisationServiceDetail,
      navigationOptions: {
        header: null,
      },
    },
    OrganisationServiceMap: {
      screen: OrganisationMap,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Organisation & Services"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
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

const FaqNavigation = createStackNavigator(
  {
    InKuwaitFAQ: {
      screen: InKuwaitFAQScreen,
      navigationOptions: {
        header: null,
      },
    },
    InKuwaitFilter: {
      screen: InKuwaitFilterScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Filter"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    InKuwaitAsk: {
      screen: InKuwaitAskScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Ask question"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    InKuwaitDetail: {
      screen: InKuwaitDetailScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="FAQ"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
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

const EventsNavigation = createStackNavigator({
  InKuwaitEvents: {
    screen: EventsScreen,
    navigationOptions: {
      header: null,
    },
  },
  InKuwaitEventsFilter: {
    screen: EventsFilter,
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
  InKuwaitEventsMap: {
    screen: EventsMap,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Events',
        headerTitleStyle: {
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          color: 'white',
          width: '100%',
          textAlign: 'center',
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
          paddingTop: 15,
        },
        headerLeft: (
          <HeaderLeftIcon
            goBack={() => {
              navigation.goBack();
            }}
          />
        ),
      };
    },
  },
  InKuwaitEventsDetail: {
    screen: EventsDetail,
    navigationOptions: {
      header: null,
    },
  },
});

const InKuwaitNavigation = createStackNavigator(
  {
    InKuwait: {
      screen: InKuwaitScreen,
      navigationOptions: {
        headerTitle: <DefaultHeader title={'Living In Kuwait'} />,
      },
    },

    InKuwaitNews: {
      screen: NewsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <HeaderInKuwaitNews
              onPressBack={() => navigation.goBack()}
              onPressFilter={() => navigation.navigate('NewsFilter')}
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

    InKuwaitAnswers: {
      screen: InKuwaitAnswersScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Answers',
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
    InKuwaitCreateComment: {
      screen: InKuwaitCreateCommentScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Write comment',
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
    NewsFilter: {
      screen: NewsFilterScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Filter',
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
    ServicesNavigation: {
      screen: ServicesNavigation,
      navigationOptions: {
        header: null,
      },
    },
    FaqNavigation: {
      screen: FaqNavigation,
      navigationOptions: {
        header: null,
      },
    },
    EventsNavigation: {
      screen: EventsNavigation,
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

export default InKuwaitNavigation;
