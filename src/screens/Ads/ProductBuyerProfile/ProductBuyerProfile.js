import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';
import { colors } from '../../../constants/colors';
import styles from './styles';

import ElementList from '../../../components/ElementList/ElementList';
import ComplainModal from './ComplainModal';

class ProductBuyerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 1, active: true },
        { id: 2, title: 2, active: false },
        { id: 3, title: 1, active: true },
        { id: 4, title: 2, active: false },
      ],
      complainModalShow: false,
    };
  }

  onPressComplain = () => {
    this.setState({
      complainModalShow: !this.state.complainModalShow,
    });
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.BACKGROUND }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
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
            name="flag"
            type="material-community"
            size={24}
            color={colors.DEFAULT}
            containerStyle={{
              width: 50,
            }}
            onPress={() => this.onPressComplain()}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            alignItems: 'center',
            paddingTop: 15,
          }}>
          <Avatar
            containerStyle={{ marginRight: 25 }}
            size={64}
            rounded
            source={require('../../../assets/icons/userIcons/man.jpg')}
          />
          <View style={{ justifyContent: 'space-evenly', height: 83 }}>
            <Text style={[globalStyles.gothamMediumRegular, styles.userName]}>
              Lucas Unknown
            </Text>
            <View style={styles.location}>
              <Icon
                name="map-pin"
                type="feather"
                color={colors.UNACTIVE}
                size={20}
                iconStyle={{ marginRight: 8 }}
              />
              <Text
                style={[
                  globalStyles.gothamBook,
                  { fontSize: 15, lineHeight: 26, color: colors.UNACTIVE },
                ]}>
                Al Jabriya
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.wraperView}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.block}>
              <Icon
                name="cellphone-text"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
              />
              <Text style={[globalStyles.gothamBook, styles.blockText]}>
                01567 23040
              </Text>
            </View>
            <View style={styles.block}>
              <Icon
                name="clock"
                type="octicon"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
              />
              <Text style={[globalStyles.gothamBook, styles.blockText]}>
                Since 2017
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
            <Text style={[globalStyles.gothamBook, styles.blockText]}>
              neha.ryan@gmail.com
            </Text>
          </View>
          <View style={styles.myAdsView}>
            <Text
              style={[
                globalStyles.gothamBold,
                { fontSize: 12, lineHeight: 20, letterSpacing: 1 },
              ]}>
              MY ADS
            </Text>
            <SafeAreaView style={styles.flatListView}>
              <FlatList
                numColumns={2}
                data={this.state.data}
                renderItem={({ item }) => (
                  <ElementList item={item} onPressProduct={() => {}} />
                )}
                keyExtractor={(item, index) => item.id}
              />
            </SafeAreaView>
          </View>
        </View>
        <ComplainModal
          show={this.state.complainModalShow}
          onPressClose={this.onPressComplain}
        />
      </ScrollView>
    );
  }
}

export default ProductBuyerProfile;
