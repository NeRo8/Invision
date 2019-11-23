import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Moment from 'moment';
import { Icon, Button, Avatar, Input } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';

import { connect } from 'react-redux';
import { getAd } from '../../../redux/actions/adsAction';

import StarRating from 'react-native-star-rating';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { colors } from '../../../constants/colors';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

import ElementList from '../../../components/ElementList/ElementList';
import ModalShare from './ModalShare';
import HeaderProduct from '../../../components/HeaderProduct';

const ElementFlatList = ({ item }) => (
  <View style={styles.elementContainer}>
    <View style={{ flexDirection: 'row', flex: 1, height: 40 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ paddingRight: 10 }}>
          <Avatar
            rounded
            source={item.userIcon}
            imageProps={{ resizeMode: 'cover' }}
            size={40}
          />
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={[styles.userName, globalStyles.gothamBold]}>
            {item.userName}
          </Text>
          <StarRating
            disabled
            maxStars={5}
            rating={item.raiting}
            emptyStar="ios-star"
            fullStar="ios-star"
            halfStar="ios-star"
            iconSet="Ionicons"
            fullStarColor={colors.STAR}
            emptyStarColor={colors.UNACTIVE}
            starSize={15}
            starStyle={{ marginRight: 6 }}
          />
        </View>
      </View>
      <View>
        <Text style={[globalStyles.gothamBook, styles.date]}>{item.date}</Text>
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <Text style={[globalStyles.gothamBook, styles.coment]}>
        {item.coment}
      </Text>
    </View>
  </View>
);

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      productImages: [
        {
          id: 0,
          productImage: require('../../../assets/images/productImages/iphone.jpg'),
        },
        {
          id: 1,
          productImage: require('../../../assets/images/productImages/iphone2.jpg'),
        },
        {
          id: 2,
          productImage: require('../../../assets/images/productImages/iphone3.jpg'),
        },
        {
          id: 3,
          productImage: require('../../../assets/images/productImages/iphone4.jpg'),
        },
      ],
      tags: [
        { id: 0, title: 'Privat' },
        { id: 1, title: 'New' },
        { id: 2, title: 'Mobile phone' },
        { id: 3, title: 'iPhone x' },
      ],
      coments: [
        {
          id: 0,
          userName: 'Tyler Hicks',
          date: '01.01.19',
          raiting: 4,
          userIcon: require('../../../assets/icons/userIcons/man.jpg'),
          coment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
          id: 1,
          userName: 'Billy Weaver',
          date: '01.01.19',
          raiting: 4,
          userIcon: require('../../../assets/icons/userIcons/man2.jpg'),
          coment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          id: 2,
          userName: 'Jordan Mann',
          date: '01.01.19',
          raiting: 5,
          userIcon: require('../../../assets/icons/userIcons/man3.jpg'),
          coment: 'Lorem Ipsum is simply dummy text of the printing.',
        },
      ],

      modalShow: false,
    };
  }

  componentDidMount() {
    const prodId = this.props.navigation.getParam('productId', null);
    this.props.getAdData(prodId);

    console.log('RES', this.props.productData);
  }

  handlePressWriteOwnComment = () => {
    this.props.navigation.navigate('ProductWriteMessage');
  };

  onPressShere = () => {
    this.setState({
      modalShow: !this.state.modalShow,
    });
  };

  render() {
    const { productData } = this.props;
    if (productData.length === 0) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={colors.HEADER} />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <HeaderProduct onPressShere={this.onPressShere} />
        <ScrollView>
          <View style={styles.container}>
            <SwiperFlatList
              data={productData.adimage_set}
              showPagination
              renderItem={items => (
                <View style={styles.container}>
                  <View style={styles.child}>
                    <Image
                      resizeMode="cover"
                      style={styles.swiperImage}
                      source={items.item.image}
                    />
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.head}>
            <Text style={[globalStyles.gothamBook, styles.title]}>
              {productData.title}
            </Text>

            <View style={styles.properties}>
              <Text style={[globalStyles.gothamBook, styles.price]}>
                {productData.price} {productData.currency.toUpperCase()}
              </Text>

              <View style={styles.vdView}>
                <View style={styles.vd}>
                  <Icon
                    iconStyle={{ color: colors.UNACTIVE, marginRight: 5 }}
                    name="eye-outline"
                    type="material-community"
                    size={16}
                  />
                  <Text
                    style={[
                      globalStyles.gothamBook,
                      { fontSize: 15, lineHeight: 26, color: colors.UNACTIVE },
                    ]}>
                    {productData.views}
                  </Text>
                </View>
                <View style={styles.vd}>
                  <Icon
                    iconStyle={{ color: colors.UNACTIVE, marginRight: 5 }}
                    name="clock-outline"
                    type="material-community"
                    size={16}
                  />

                  <Text
                    style={[
                      globalStyles.gothamBook,
                      { color: colors.UNACTIVE, fontSize: 15, lineHeight: 26 },
                    ]}>
                    {Moment(productData.publish_date).format('YYYY.MM.DD')}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.tagsView}>
              <FlatList
                style={{
                  borderBottomWidth: 0.5,
                  borderTopWidth: 0.5,
                  borderColor: '#EAEAEA',
                }}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  minWidth: '90%',
                  height: 45,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                keyExtractor={item => item.id}
                horizontal
                data={this.state.tags}
                render
                renderItem={items => (
                  <TouchableOpacity style={{ paddingRight: 10 }}>
                    <Text style={[globalStyles.gothamBold, styles.tagsText]}>
                      {items.item.title}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View>
              <Text style={[globalStyles.gothamBook, styles.description]}>
                {productData.description}
              </Text>
              <TouchableOpacity style={{ marginTop: 8 }}>
                <Text
                  style={[
                    globalStyles.gothamBook,
                    {
                      color: colors.UNACTIVE,
                      fontSize: 17,
                      lineHeight: 32,
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  Show more
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: 25, backgroundColor: '#F5F8FB' }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ProductBuyerProfile')
                  }
                  style={{
                    marginHorizontal: 15,
                    alignItems: 'center',

                    height: 48,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Avatar
                      rounded
                      source={
                        productData.user.avatar === null
                          ? require('../../../assets/icons/userIcons/man.jpg')
                          : { uri: productData.user.avatar }
                      }
                      imageProps={{ resizeMode: 'cover' }}
                      size={25}
                    />
                    <Text
                      style={[
                        globalStyles.gothamBold,
                        { marginLeft: 10, lineHeight: 20, fontSize: 15 },
                      ]}>
                      {productData.user.full_name}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        globalStyles.gothamBook,
                        { color: colors.HEADER, fontSize: 15, lineHeight: 23 },
                      ]}>
                      Other ads
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 200,
                  marginTop: 10,
                }}>
                <MapView
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  provider="google"
                  style={{ flex: 1 }}>
                  <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  />
                </MapView>
              </View>
            </View>
            <View>
              <Text
                style={[
                  globalStyles.gothamBold,
                  {
                    marginTop: 25,
                    fontSize: 15,
                    lineHeight: 23,
                    letterSpacing: 1,
                  },
                ]}>
                REVIEWS
              </Text>
              <FlatList
                data={this.state.coments}
                renderItem={({ item }) => <ElementFlatList item={item} />}
              />
              <Button
                title="Rear all 100 reviews"
                titleStyle={[globalStyles.gothamBold, styles.titleRear]}
                buttonStyle={styles.btnStyleRear}
                containerStyle={styles.btnContainer}
                onPress={null}
              />
              <Button
                title="Write own comment"
                titleStyle={[globalStyles.gothamBold, styles.titleWrite]}
                buttonStyle={styles.btnStyleWrite}
                onPress={() => this.props.navigation.navigate('CreateComment')}
              />
            </View>
            <View>
              <Text
                style={[
                  globalStyles.gothamBold,
                  {
                    marginTop: 48,
                    fontSize: 15,
                    lineHeight: 23,
                    letterSpacing: 1,
                  },
                ]}>
                SIMILAR ADS
              </Text>
              <SafeAreaView style={styles.flatListView}>
                <FlatList
                  numColumns={2}
                  data={this.props.productData.recommended}
                  renderItem={({ item }) => (
                    <ElementList item={item} onPressProduct={() => {}} />
                  )}
                  keyExtractor={(item, index) => item.pk}
                />
              </SafeAreaView>
            </View>
            <Button
              title="Show more ads"
              titleStyle={[globalStyles.gothamBold, styles.titleRear]}
              buttonStyle={styles.btnStyleRear}
              containerStyle={styles.btnContainer}
              onPress={null}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',

              backgroundColor: '#F8F8F9',
              marginHorizontal: 15,
              marginBottom: 15,
            }}>
            <View style={{ flex: 1 }}>
              <Icon
                name="phone"
                type="font-awesome"
                color="white"
                containerStyle={{
                  backgroundColor: '#9BA9BE',
                  width: 55,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                }}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Input
                inputStyle={[
                  globalStyles.gothamBook,
                  {
                    fontSize: 17,
                    lineHeight: 24,
                    backgroundColor: 'white',
                    height: 50,
                  },
                ]}
                inputContainerStyle={{
                  maxWidth: '100%',
                  backgroundColor: 'white',
                  borderBottomWidth: 0,
                }}
                backgroundColor="white"
                placeholder="Write massage"
                rightIcon={
                  <Icon
                    name="send"
                    type="material-comunity"
                    color="white"
                    containerStyle={{
                      backgroundColor: colors.HEADER,
                      width: 55,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                      marginRight: -10,
                    }}
                  />
                }
              />
            </View>
          </View>
          <ModalShare
            show={this.state.modalShow}
            onPressClose={this.onPressShere}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    productData: state.ads.adData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdData: prodId => {
      dispatch(getAd(prodId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
