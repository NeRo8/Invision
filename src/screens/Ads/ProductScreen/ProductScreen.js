import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Moment from 'moment';
import { Icon, Button, Avatar, Input } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { getAd } from '../../../redux/actions/adsAction';
import { getData } from '../../../utils/AsyncStorage';

import { colors, globalStyles } from '../../../constants';

import styles from './styles';

import HeaderProduct from '../../../components/HeaderProduct';
import { ElementListAds } from '../../../components/ElementLists';
import ModalShare from './ModalShare';

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
          <Text style={styles.userNameComents}>{item.userName}</Text>
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
      // imageSource: this.props.productData.adimage_set.filter(
      //   item => item.is_primary === true,
      // ),
    };
  }

  async componentDidMount() {
    const token = await getData('token');
    const prodId = this.props.navigation.getParam('productId', null);
    this.props.getAdData(prodId, token);
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
    const { productData, loading } = this.props;
    if (loading) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={colors.HEADER} />
        </View>
      );
    } else
      return (
        <View style={{ flex: 1 }}>
          <HeaderProduct item={productData} onPressShere={this.onPressShere} />
          <ScrollView>
            <View style={styles.container}>
              <SwiperFlatList
                data={productData.adimage_set.reverse()}
                showPagination={
                  productData.adimage_set.length === 1 ? false : true
                }
                renderItem={items => (
                  <View style={styles.container}>
                    <View style={styles.child}>
                      <Image
                        resizeMode="cover"
                        style={styles.swiperImage}
                        source={{ uri: items.item.image }}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={styles.head}>
              <Text style={styles.title}>{productData.title}</Text>

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
                    <Text style={styles.viewsAndDate}>{productData.views}</Text>
                  </View>
                  <View style={styles.vd}>
                    <Icon
                      iconStyle={{ color: colors.UNACTIVE, marginRight: 5 }}
                      name="clock-outline"
                      type="material-community"
                      size={16}
                    />

                    <Text style={styles.viewsAndDate}>
                      {Moment(productData.publish_date).format('YYYY.MM.DD')}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.tagsView}>
                <FlatList
                  style={styles.tagsFlatList}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.tagsFlatListContainer}
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
                  <Text style={styles.showMoreText}>Show more</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 25, backgroundColor: '#F5F8FB' }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ProductBuyerProfile')
                    }
                    style={styles.userTouchable}>
                    <View style={styles.userLeftBlock}>
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
                      <Text style={styles.userName}>
                        {productData.user.full_name}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.otherAds}>Other ads</Text>
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
                <Text style={styles.reviews}>REVIEWS</Text>
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
                  onPress={() =>
                    this.props.navigation.navigate('CreateComment')
                  }
                />
              </View>
              <View>
                <Text style={styles.similarAds}>SIMILAR ADS</Text>
                <View style={styles.flatListView}>
                  <FlatList
                    numColumns={2}
                    data={this.props.productData.recommended}
                    renderItem={({ item }) => (
                      <ElementListAds item={item} onPressProduct={() => {}} />
                    )}
                    keyExtractor={(item, index) => item.pk}
                  />
                </View>
              </View>
              <Button
                title="Show more ads"
                titleStyle={[globalStyles.gothamBold, styles.titleRear]}
                buttonStyle={styles.btnStyleRear}
                containerStyle={styles.btnContainer}
                onPress={null}
              />
            </View>
            <View style={styles.bottomView}>
              <View style={{ flex: 1 }}>
                <Icon
                  name="phone"
                  type="font-awesome"
                  color="white"
                  containerStyle={styles.iconPhoneContainer}
                />
              </View>
              <View style={{ flex: 6 }}>
                <Input
                  inputStyle={styles.bottomInput}
                  inputContainerStyle={styles.bottomInputContainer}
                  backgroundColor="white"
                  placeholder="Write massage"
                  rightIcon={
                    <Icon
                      name="send"
                      type="material-comunity"
                      color="white"
                      containerStyle={styles.iconSendContainer}
                    />
                  }
                />
              </View>
            </View>
            <ModalShare
              show={this.state.modalShow}
              imageUrl={productData.adimage_set.find(
                el => el.is_primary === true,
              )}
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
    loading: state.ads.loadingAd,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdData: (prodId, token) => {
      dispatch(getAd(prodId, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
