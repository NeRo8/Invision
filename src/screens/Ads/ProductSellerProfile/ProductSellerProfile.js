import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import { ElementListAds } from '../../../components/ElementLists';
import ComplainModal from './ComplainModal';
import LoadingStatus from '../../../components/LoadingStatus';

import moment from 'moment';

import { colors } from '../../../constants';

import styles from './styles';

class ProductSellerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complainModalShow: false,
    };
  }

  componentDidMount() {
    const { navigation, getProfile } = this.props;

    const userid = navigation.getParam('id', null);

    getProfile(userid);
  }

  onPressComplain = () => {
    this.setState({
      complainModalShow: !this.state.complainModalShow,
    });
  };

  onPressElement = pk => {
    const { getAdDetail, navigation } = this.props;

    getAdDetail(pk);
    navigation.navigate('ProductDetail');
  };

  render() {
    const { profile, ads, loading } = this.props;
    if (loading) {
      return <LoadingStatus />;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <View style={styles.headerNavigation}>
            <Icon
              name="chevron-left"
              type="feather"
              size={32}
              color="black"
              containerStyle={{
                width: 50,
              }}
              underlayColor="transparent"
              onPress={() => this.props.navigation.goBack()}
            />
            <Icon
              name="md-flag"
              type="ionicon"
              size={24}
              color={colors.DEFAULT}
              underlayColor="transparent"
              containerStyle={{
                width: 50,
              }}
              onPress={() => this.onPressComplain()}
            />
          </View>
          <View style={styles.headerProfile}>
            {profile.avatar === null ? (
              <Icon
                name="ios-person"
                type="ionicon"
                color="white"
                size={40}
                underlayColor="transparent"
                containerStyle={styles.avatarIcon}
              />
            ) : (
              <Avatar
                containerStyle={{ marginRight: 25 }}
                size={64}
                rounded
                source={{ uri: profile.avatar }}
              />
            )}
            <View style={{ justifyContent: 'space-evenly', height: 83 }}>
              <Text style={styles.userName}>{profile.full_name}</Text>
              <View style={styles.location}>
                <Icon
                  name="map-pin"
                  type="feather"
                  color={colors.UNACTIVE}
                  size={20}
                  underlayColor="transparent"
                  iconStyle={{ marginRight: 8 }}
                />
                <Text style={styles.userLocation}>
                  {profile.city !== null ? profile.city.name : 'Not found'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.wraperView}>
          <View style={styles.blockUserInfo}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={styles.block}>
                <Icon
                  name="cellphone-text"
                  type="material-community"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                  underlayColor="transparent"
                />
                <Text style={styles.blockText}>
                  {profile.phone_number !== null
                    ? profile.phone_number
                    : 'Not found'}
                </Text>
              </View>
              <View style={styles.block}>
                <Icon
                  name="clock"
                  type="octicon"
                  underlayColor="transparent"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={styles.blockText}>
                  Since {moment(profile.date_joined).format('YYYY')}
                </Text>
              </View>
            </View>

            <View style={styles.blockEmail}>
              <Icon
                name="email-outline"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
                underlayColor="transparent"
              />
              <Text style={styles.blockText}>{profile.email}</Text>
            </View>
          </View>

          <View style={styles.myAdsView}>
            <Text style={styles.headerTag}>MY ADS</Text>
            <FlatList
              numColumns={2}
              data={ads}
              renderItem={({ item }) => (
                <ElementListAds
                  item={item}
                  onPressProduct={this.onPressElement}
                />
              )}
              keyExtractor={(item, index) => item.pk}
            />
          </View>
        </View>
        <ComplainModal
          show={this.state.complainModalShow}
          onPressClose={this.onPressComplain}
        />
      </View>
    );
  }
}

export default ProductSellerProfile;
