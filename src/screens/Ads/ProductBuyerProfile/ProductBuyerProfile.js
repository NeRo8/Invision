import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import { ElementListAds } from '../../../components/ElementLists';
import ComplainModal from './ComplainModal';

import moment from 'moment';

import { colors } from '../../../constants';

import styles from './styles';

class ProductBuyerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complainModalShow: false,
    };
  }

  onPressComplain = () => {
    this.setState({
      complainModalShow: !this.state.complainModalShow,
    });
  };

  onPressElement = pk => {
    const { getAdData, token, setLoad, navigation } = this.props;
    setLoad(true);
    getAdData(pk, token);
    navigation.navigate('ProductDetail');
  };

  render() {
    const { user, ads } = this.props;

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
              onPress={() => this.props.navigation.goBack()}
            />
            <Icon
              name="md-flag"
              type="ionicon"
              size={24}
              color={colors.DEFAULT}
              containerStyle={{
                width: 50,
              }}
              onPress={() => this.onPressComplain()}
            />
          </View>
          <View style={styles.headerProfile}>
            {user.avatar === null ? (
              <Icon
                name="ios-person"
                type="ionicon"
                color="white"
                size={40}
                containerStyle={styles.avatarIcon}
              />
            ) : (
              <Avatar
                containerStyle={{ marginRight: 25 }}
                size={64}
                rounded
                source={{ uri: user.avatar }}
              />
            )}
            <View style={{ justifyContent: 'space-evenly', height: 83 }}>
              <Text style={styles.userName}>{user.full_name}</Text>
              <View style={styles.location}>
                <Icon
                  name="map-pin"
                  type="feather"
                  color={colors.UNACTIVE}
                  size={20}
                  iconStyle={{ marginRight: 8 }}
                />
                <Text style={styles.userLocation}>Al Jabriya</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.wraperView}>
          <View style={styles.blockUserInfo}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.block}>
                <Icon
                  name="cellphone-text"
                  type="material-community"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={styles.blockText}>
                  {user.phone_number !== null ? user.phone_number : 'Not found'}
                </Text>
              </View>
              <View style={styles.block}>
                <Icon
                  name="clock"
                  type="octicon"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={styles.blockText}>
                  Since {moment(user.date_joined).format('YYYY')}
                </Text>
              </View>
            </View>

            <View style={styles.blockEmail}>
              <Icon
                name="email-outline"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
              />
              <Text style={styles.blockText}>{user.email}</Text>
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

export default ProductBuyerProfile;
