import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';

import TextPicker from '../../components/TextPicker';
import ElementFL from './ProfileAds';
import { ProfileAdsModal } from '../../components/Modals';

import { colors, globalStyles } from '../../constants';

import styles from './styles';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          id: 0,
          title: 'Active',
          active: true,
          func: () => {
            this.setState({ grayscale: false });
          },
        },
        {
          id: 1,
          title: 'Unactive',
          active: false,
          func: () => {
            this.setState({ grayscale: true });
          },
        },
      ],
      grayscale: false,
      item: null,
      showModal: false,
    };
  }

  componentDidMount() {
    const { getProfileInfo, token, navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () =>
      this.componentDidFocus(),
    );
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  componentDidFocus() {
    const { token, getProfileInfo } = this.props;
    if (token !== null) {
      getProfileInfo(token);
    }
  }

  showOption = (value, itemIncome) => {
    this.setState({
      showModal: value,
      item: itemIncome,
    });
  };

  handlePressSelectedView = name => {
    this.setState({
      active: false,
      inactive: false,
      [name]: true,
    });
  };

  handlePressFilter = id => {
    const { filters } = this.state;
    const newFilter = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilter,
    });
  };

  render() {
    const { loading, token, user, navigation, ads } = this.props;
    if (token === null) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color={colors.HEADER} />
          <Text style={styles.loadingText}>First you need sign in ...</Text>
        </View>
      );
    } else if (loading === true) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color={colors.HEADER} />
        </View>
      );
    } else
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <LinearGradient
            colors={['rgb(45,118,233)', 'rgb(97,193,248)']}
            start={{ x: 0.0, y: 1 }}
            end={{ x: 0.8, y: 1.3 }}>
            <View style={styles.headerProfile}>
              <View style={styles.headerProfileContainer}>
                <Icon
                  name="folder-open"
                  type="ion-icon"
                  color="white"
                  containerStyle={styles.iconHeader}
                  onPress={() => navigation.navigate('ProfilePaymentHistory')}
                />
                <View>
                  <View style={styles.profileImage}>
                    <Icon
                      name="person"
                      type="ion-icon"
                      size={50}
                      color="silver"
                      containerStyle={styles.iconProfile}
                    />
                  </View>
                  <Icon
                    name="pencil-outline"
                    type="material-community"
                    color="white"
                    size={20}
                    containerStyle={styles.iconHeaderProfile}
                  />
                </View>
                <View>
                  <View>
                    <Icon
                      name="ios-notifications-outline"
                      type="ionicon"
                      color="white"
                      containerStyle={styles.iconHeader}
                      onPress={() =>
                        navigation.navigate('ProfileNotifications')
                      }
                    />
                  </View>
                  <View style={styles.containerTextIcon}>
                    <Text
                      style={[
                        globalStyles.gothamMediumRegular,
                        styles.fontInsideImage,
                      ]}>
                      5
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.headerTitleText}>{user.full_name}</Text>
              </View>
            </View>
          </LinearGradient>
          <Button
            title="Settings"
            titleStyle={styles.btnSettingsTitle}
            buttonStyle={styles.btnStyle}
            onPress={() => navigation.navigate('ProfileSettings')}
          />
          <View>
            <View style={styles.infoElement}>
              <Icon
                name="ios-mail"
                type="ionicon"
                color={colors.HEADER}
                containerStyle={{ marginHorizontal: 20 }}
              />
              <Text style={styles.elementLabel}>{user.email}</Text>
            </View>
            <View style={styles.infoElement}>
              <Icon
                name="ios-call"
                type="ionicon"
                color={colors.HEADER}
                containerStyle={{ marginHorizontal: 20 }}
              />
              <Text style={styles.elementLabel}>
                {user.phone_number !== null ? user.phone_number : 'Not found'}
              </Text>
            </View>
            <View style={styles.infoElement}>
              <Icon
                name="ios-business"
                type="ionicon"
                color={colors.HEADER}
                containerStyle={{ marginHorizontal: 20 }}
              />
              <Text style={styles.elementLabel}>
                {user.city !== null ? user.city.name : 'Not found'}
              </Text>
            </View>
          </View>
          <View style={styles.blockBody}>
            <Text style={styles.headerText}>MY ADS</Text>

            <View style={styles.selectedContainer}>
              <TextPicker
                dataList={this.state.filters}
                onPressElement={this.handlePressFilter}
              />
            </View>

            <FlatList
              data={ads.results}
              renderItem={({ item }) => (
                <ElementFL
                  item={item}
                  showOption={this.showOption}
                  grayscale={this.state.grayscale}
                />
              )}
              keyExtractor={(item, index) => index}
            />

            {this.state.item !== null ? (
              <ProfileAdsModal
                item={this.state.item}
                show={this.state.showModal}
                showOption={this.showOption}
              />
            ) : null}
          </View>
        </ScrollView>
      );
  }
}

export default ProfileScreen;
