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
import NewsAnswers from '../screens/InKuwait/News/NewsAnswers';
import NewsCreateComment from '../screens/InKuwait/News/NewsCreateComment';
import NewsFilter from '../screens/InKuwait/News/NewsFilter';

import OrganisationAndServicesScreen from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesScreen';
import OrganisationAndServicesFilter from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesFilter';
import OrganisationAndServicesDetail from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesDetail';
import OrganisationAndServicesMap from '../screens/InKuwait/OrganisationAndServices/OrganisationAndServicesMap';

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
    OrganisationAndServicesDetail: {
      screen: OrganisationAndServicesDetail,
      navigationOptions: {
        header: null,
      },
    },
    OrganisationAndServicesMap: {
      screen: OrganisationAndServicesMap,
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
    NewsAnswers: {
      screen: NewsAnswers,
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
    NewsCreateComment: {
      screen: NewsCreateComment,
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
      screen: NewsFilter,
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
