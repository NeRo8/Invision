import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettings from '../screens/ProfileSettings';

import ProfileSettingsChangePassword from '../screens/ProfileSettingsChangePassword';
import ProfileSettingsPersonalInformaion from '../screens/ProfileSettingsPersonalInformaion';
import ProfileSettingsPrivacyPolicy from '../screens/ProfileSettingsPrivacyPolicy';
import ProfileSettingsTermsOfUse from '../screens/ProfileSettingsTermsOfUse';
import ProfilePaymentHistory from '../screens/ProfilePaymentHistory';
import ProfileNotifications from '../screens/ProfileNotifications';
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
        },
        headerStyle: {
          backgroundColor: colors.HEADER,
        },
        headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
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
