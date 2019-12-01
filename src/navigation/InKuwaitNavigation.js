import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

import InKuwaitScreen from '../screens/InKuwaitScreen';
//FAQ
import FaqScreen from '../screens/InKuwait/FAQ/FaqScreen';
import FaqDetail from '../screens/InKuwait/FAQ/FaqDetail';
import FaqFilter from '../screens/InKuwait/FAQ/FaqFilter';
import FaqAsk from '../screens/InKuwait/FAQ/FaqAsk';
import FaqAnswers from '../screens/InKuwait/FAQ/FaqAnswers';
import FaqCreateComment from '../screens/InKuwait/FAQ/FaqCreateComment';

//Events
import EventsScreen from '../screens/InKuwait/Events/EventsScreen';
import EventsFilter from '../screens/InKuwait/Events/EventsFilter';
import EventsMap from '../screens/InKuwait/Events/EventsMap';
import EventsDetail from '../screens/InKuwait/Events/EventsDetail';

//News
import NewsScreen from '../screens/InKuwait/News/NewsScreen';
import NewsDetail from '../screens/InKuwait/News/NewsDetail';
import ArticleComentsScreen from '../screens/InKuwait/News/ArticleComentsScreen/';
import NewsWriteComment from '../screens/InKuwait/News/NewsWriteComment';
import NewsFilterScreen from '../screens/InKuwait/News/NewsFilterScreen';

import OrganisationAndServicesScreen from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesScreen';
import OrganisationAndServicesFilter from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesFilter';
import OrganisationServiceDetail from '../screens/InKuwait/OrganisationAndServices/OrganisationServiceDetail';
import OrganisationMap from '../screens/InKuwait/OrganisationAndServices/OrganisationMap/OrganisationMap';

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

// Organisation and services
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

// FAQ
const FaqNavigation = createStackNavigator(
  {
    FaqScreen: {
      screen: FaqScreen,
      navigationOptions: {
        header: null,
      },
    },
    FaqFilter: {
      screen: FaqFilter,
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
    FaqAsk: {
      screen: FaqAsk,
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
    FaqAnswers: {
      screen: FaqAnswers,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Answers"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    FaqDetail: {
      screen: FaqDetail,
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
    FaqCreateComment: {
      screen: FaqCreateComment,
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
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
    },
  },
);
//Events
const EventsNavigation = createStackNavigator(
  {
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
    InKuwaitEventsMap: {
      screen: EventsMap,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Events"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    InKuwaitEventsDetail: {
      screen: EventsDetail,
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

const NewsNavigation = createStackNavigator(
  {
    NewsScreen: {
      screen: NewsScreen,
      navigationOptions: {
        header: null,
      },
    },

    NewsDetail: {
      screen: NewsDetail,
      navigationOptions: {
        header: null,
      },
    },
    //News answars
    ArticleComents: {
      screen: ArticleComentsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Comments"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    NewsWriteComment: {
      screen: NewsWriteComment,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <DefaultHeader
              title="Write comment"
              leftIcon={true}
              onPressLeftIcon={() => navigation.goBack()}
            />
          ),
          headerLeft: null,
          headerRight: null,
        };
      },
    },
    NewsFilter: {
      screen: NewsFilterScreen,
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
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
    },
  },
);

const InKuwaitNavigation = createStackNavigator(
  {
    InKuwait: {
      screen: InKuwaitScreen,
      navigationOptions: {
        headerTitle: <DefaultHeader title={'Living In Kuwait'} />,
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
    NewsNavigation: {
      screen: NewsNavigation,
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
