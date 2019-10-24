import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettings from '../screens/ProfileSettings';
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
      return{
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: colors.HEADER,
      },
      headerLeft: <HeaderLeft onPressCancel={() => navigation.goBack()} />,
    }
  }
  },
}
);

export default ProfileNavigation;
