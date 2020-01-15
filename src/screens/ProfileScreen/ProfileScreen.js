import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

import ElementFL from './components/Ads';
import LoadingStatus from '../../components/LoadingStatus';

import { colors } from '../../constants';

import styles from './styles';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () =>
      this.componentDidFocus(),
    );
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  componentDidFocus() {
    const { getProfileInfo } = this.props;

    getProfileInfo();
  }

  handlePressChangeAvatar = async () => {
    const options = {
      title: 'Select avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //const source = {uri: response.uri};
        this.setState({
          avatar: response,
        });
        console.log(response);
        const { onUpdateAvatar } = this.props;
        onUpdateAvatar(this.state.avatar);
      }
    });
  };

  renderAvatar() {
    const { avatar } = this.state;
    const { user } = this.props;

    if (avatar !== null) {
      return (
        <Image
          source={{ uri: avatar.uri }}
          style={{ borderRadius: 75, height: 82, width: 82 }}
          resizeMode="cover"
        />
      );
    } else if (user.avatar !== null) {
      return (
        <Image
          source={{ uri: user.avatar }}
          style={{ borderRadius: 75, height: 82, width: 82 }}
          resizeMode="cover"
        />
      );
    } else {
      return (
        <Icon
          name="person"
          type="ion-icon"
          size={50}
          color="silver"
          containerStyle={styles.iconProfile}
        />
      );
    }
  }

  render() {
    const {
      loading,
      authStatus,
      user,
      navigation,
      ads,
      setStatusAds,
      adsState,
    } = this.props;

    if (!authStatus) {
      return <LoadingStatus text="First you need sign in ..." />;
    }
    if (loading === true) {
      return <LoadingStatus />;
    }
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
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
                <View style={styles.profileImage}>{this.renderAvatar()}</View>
                <Icon
                  name="pencil-outline"
                  type="material-community"
                  underlayColor="transparent"
                  color="white"
                  size={20}
                  containerStyle={styles.iconHeaderProfile}
                  onPress={this.handlePressChangeAvatar}
                />
              </View>
              <View>
                <View>
                  <Icon
                    name="ios-notifications-outline"
                    type="ionicon"
                    color="white"
                    containerStyle={styles.iconHeader}
                    onPress={() => navigation.navigate('ProfileNotifications')}
                  />
                </View>
                <View style={styles.containerTextIcon}>
                  <Text style={styles.fontInsideImage}>5</Text>
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
            <TouchableOpacity
              onPress={() => {
                setStatusAds('active');
              }}
              style={
                adsState === 'active'
                  ? styles.textBlockActive
                  : styles.textBlockUnactive
              }>
              <Text
                style={
                  adsState === 'active'
                    ? styles.textActive
                    : styles.unactiveText
                }>
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStatusAds('inactive');
              }}
              style={
                adsState === 'inactive'
                  ? styles.textBlockActive
                  : styles.textBlockUnactive
              }>
              <Text
                style={
                  adsState === 'inactive'
                    ? styles.textActive
                    : styles.unactiveText
                }>
                Unactive
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={ads.results}
            renderItem={({ item }) => <ElementFL item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
