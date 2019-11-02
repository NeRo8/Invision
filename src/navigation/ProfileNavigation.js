import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../screens/ProfileScreen';

import ProfileSettings from '../screens/Profile/ProfileSettings';
import ProfileSettingsChangePassword from '../screens/Profile/ProfileSettingsChangePassword';
import ProfileSettingsPersonalInformaion from '../screens/Profile/ProfileSettingsPersonalInformaion';
import ProfileSettingsPrivacyPolicy from '../screens/Profile/ProfileSettingsPrivacyPolicy';
import ProfileSettingsTermsOfUse from '../screens/Profile/ProfileSettingsTermsOfUse';
import ProfilePaymentHistory from '../screens/Profile/ProfilePaymentHistory';
import ProfileNotifications from '../screens/Profile/ProfileNotifications';
import ProfileNotificationsChat from '../screens/ProfileNotificationsChat';

import { colors } from '../constants/colors';

import globalStyles from '../constants/globalStyles';

const styles = StyleSheet.create({
  btnCancel: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

const HeaderLeft = ({ onPressCancel }) => (
  <TouchableOpacity
    onPress={() => {
      onPressCancel();
    }}>
    <Text style={[styles.btnCancel, globalStyles.gothamBook]}>Cancel</Text>
  </TouchableOpacity>
);

const HeaderLeftIcon = ({ onPressBack }) => (
  <Icon
    name={'chevron-left'}
    size={38}
    color="white"
    underlayColor="transparent"
    onPress={() => {
      onPressBack();
    }}
  />
);

const ProfileNavigation = createStackNavigator({
  Home: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProfileSettings: {
    screen: ProfileSettings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfileSettingsChangePassword: {
    screen: ProfileSettingsChangePassword,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Change password',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfileSettingsPersonalInformaion: {
    screen: ProfileSettingsPersonalInformaion,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Personal informaion',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfileSettingsPrivacyPolicy: {
    screen: ProfileSettingsPrivacyPolicy,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Privacy Policy',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfileSettingsTermsOfUse: {
    screen: ProfileSettingsTermsOfUse,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Terms of Use',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfilePaymentHistory: {
    screen: ProfilePaymentHistory,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Payment history',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfileNotifications: {
    screen: ProfileNotifications,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Notifications',
        headerTitleStyle: {
          color: 'white',
          fontFamily: globalStyles.gothamBold.fontFamily,
          fontSize: 17,
          lineHeight: 24,
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeftIcon onPressBack={() => navigation.goBack()} />,
      };
    },
  },
  ProfileNotificationsChat: {
    screen: ProfileNotificationsChat,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Pavlo Laptev',
        headerTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
      };
    },
  },
});

export default ProfileNavigation;
