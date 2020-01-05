import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Divider, Icon } from 'react-native-elements';

import { DefaultButton } from '../../../components/Buttons';

import { colors } from '../../../constants';
import styles from './styles';

const ItemSettings = ({ title, screen, onPressItem, rightIcon = null }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => onPressItem(screen)}>
    <View style={{ flex: 8 }}>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
    <View style={{ flex: 2, alignItems: 'flex-end' }}>
      {rightIcon === null ? (
        <Icon
          name="chevron-right"
          type="material-community"
          color="silver"
          size={32}
        />
      ) : (
        rightIcon
      )}
    </View>
  </TouchableOpacity>
);

class ProfileSettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: true,
      getAnswears: true,
      getNews: true,
    };
  }

  handlePressItem = screen => {
    const { navigation } = this.props;

    navigation.navigate(screen);
  };

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { notification, getAnswears, getNews } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerBlock}>
          <View>
            <Text style={styles.headerText}>PERSONAL INFO & PASSWORD</Text>
            <Divider style={styles.divider} />
            <ItemSettings
              title="Change Password"
              screen="ProfileSettingsChangePassword"
              onPressItem={this.handlePressItem}
            />
            <Divider style={styles.divider} />
            <ItemSettings
              title="Change personal information"
              screen="ProfileSettingsPersonalInformaion"
              onPressItem={this.handlePressItem}
            />
            <Divider style={styles.divider} />
          </View>
          <View>
            <Text style={styles.headerText}>ABOUT</Text>
            <Divider style={styles.divider} />
            <ItemSettings
              title="Privacy Policy"
              screen="ProfileSettingsPrivacyPolicy"
              onPressItem={this.handlePressItem}
            />
            <Divider style={styles.divider} />
            <ItemSettings
              title="Terms of use"
              screen="ProfileSettingsTermsOfUse"
              onPressItem={this.handlePressItem}
            />
            <Divider style={styles.divider} />
            <ItemSettings
              title="Support"
              screen="ProfileSettingsSupport"
              onPressItem={this.handlePressItem}
            />
            <Divider style={styles.divider} />
          </View>
          <View>
            <Text style={styles.headerText}>PERSONAL INFO & PASSWORD</Text>
            <Divider style={styles.divider} />
            <ItemSettings
              title="Notifications"
              onPressItem={() =>
                this.onChangeState('notification', !notification)
              }
              rightIcon={
                <Switch
                  ios_backgroundColor={colors.DEFAULT}
                  trackColor={{
                    true: colors.HEADER,
                    false: colors.DEFAULT,
                  }}
                  value={notification}
                  onValueChange={value =>
                    this.onChangeState('notification', value)
                  }
                />
              }
            />
            <Divider style={styles.divider} />
            <ItemSettings
              title="Take messages about answers on ads."
              onPressItem={() =>
                this.onChangeState('getAnswears', !getAnswears)
              }
              rightIcon={
                <Switch
                  ios_backgroundColor={colors.DEFAULT}
                  trackColor={{
                    true: colors.HEADER,
                    false: colors.DEFAULT,
                  }}
                  value={getAnswears}
                  onValueChange={value =>
                    this.onChangeState('getAnswears', value)
                  }
                />
              }
            />
            <Divider style={styles.divider} />
            <ItemSettings
              title="Receive news, offers and promotions from Masaha"
              onPressItem={() => this.onChangeState('getNews', !getNews)}
              rightIcon={
                <Switch
                  ios_backgroundColor={colors.DEFAULT}
                  trackColor={{
                    true: colors.HEADER,
                    false: colors.DEFAULT,
                  }}
                  value={getNews}
                  onValueChange={value => this.onChangeState('getNews', value)}
                />
              }
            />
            <Divider style={styles.divider} />
          </View>
          <DefaultButton title="Logout" buttonStyle={{ marginVertical: 16 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProfileSettingsScreen;
