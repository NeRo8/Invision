import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import Moment from 'moment';
import { Icon, Button, Avatar, Input } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import StarRating from 'react-native-star-rating';
import SwiperFlatList from 'react-native-swiper-flatlist';

import HeaderProduct from '../../../components/Headers/ProductHeader';
import { ElementListAds } from '../../../components/ElementLists';
import { DefaultButton } from '../../../components/Buttons';
import LoadingStatus from '../../../components/LoadingStatus';

import Comment from './components/Comment';

import ShareModal from '../../../components/ShareModal';

import { colors, globalStyles } from '../../../constants';
import styles from './styles';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        { id: 0, title: 'Privat' },
        { id: 1, title: 'New' },
        { id: 2, title: 'Mobile phone' },
        { id: 3, title: 'iPhone x' },
      ],

      modalShow: false,
      showMore: false,
      readAll: false,
      moreAds: false,
    };
  }

  componentDidMount() {
    const { navigation, getAdData } = this.props;

    const id = navigation.getParam('id', null);

    getAdData(id);
  }

  handlePressWriteOwnComment = () => {
    this.props.navigation.navigate('ProductWriteMessage');
  };

  onPressShere = () => {
    this.setState({
      modalShow: !this.state.modalShow,
    });
  };

  onPressShowMore = () => {
    const { productData } = this.props;
    productData.description.length > 300
      ? this.setState({
          showMore: !this.state.showMore,
        })
      : null;
  };

  onPressReadAll = () => {
    const { productData } = this.props;
    productData.comments.length > 3
      ? this.setState({
          readAll: !this.state.readAll,
        })
      : null;
  };

  onPressMoreAds = () => {
    const { productData } = this.props;
    productData.recommended.length > 6
      ? this.setState({
          moreAds: !this.state.moreAds,
        })
      : null;
  };

  showProductDetail = id => {
    const { getAdData } = this.props;

    getAdData(id);
  };

  handlePressProfile = () => {
    const { navigation, userid } = this.props;
    navigation.navigate('ProductBuyerProfile', {
      id: userid,
    });
  };

  render() {
    const { productData, loading, authStatus } = this.props;

    if (loading) {
      return <LoadingStatus />;
    }
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
                    {items.item.image !== undefined || null ? (
                      <Image
                        resizeMode="cover"
                        style={styles.swiperImage}
                        source={{ uri: items.item.image }}
                      />
                    ) : (
                      <ActivityIndicator />
                    )}
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.head}>
            <Text style={styles.title}>{productData.title}</Text>

            <View style={styles.properties}>
              <Text style={styles.price}>
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
                keyExtractor={item => item.id.toString()}
                horizontal
                data={this.state.tags}
                render
                renderItem={items => (
                  <TouchableOpacity style={{ paddingRight: 10 }}>
                    <Text style={styles.tagsText}>{items.item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View>
              <Text ellipsizeMode={'tail'} style={styles.description}>
                {this.state.showMore === true
                  ? productData.description
                  : productData.description.slice(0, 300)}
              </Text>
              <TouchableOpacity
                onPress={() => this.onPressShowMore()}
                style={{ marginTop: 8 }}>
                <Text style={styles.showMoreText}>Show more</Text>
              </TouchableOpacity>
              <View style={{ marginTop: 25, backgroundColor: '#F5F8FB' }}>
                <TouchableOpacity
                  onPress={this.handlePressProfile}
                  style={styles.userTouchable}>
                  <View style={styles.userLeftBlock}>
                    {productData.user.avatar !== null ? (
                      <Avatar
                        rounded
                        source={{ uri: productData.user.avatar }}
                        imageProps={{ resizeMode: 'cover' }}
                        size={28}
                      />
                    ) : (
                      <Avatar
                        rounded
                        icon={{
                          name: 'person',
                          type: 'ion-icon',
                          color: 'white',
                        }}
                        containerStyle={styles.iconProfile}
                        size={28}
                      />
                    )}

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
                data={
                  this.state.readAll === true
                    ? productData.comments
                    : productData.comments.slice(0, 3)
                }
                renderItem={({ item }) => <Comment item={item} />}
                keyExtractor={item => item.pk.toString()}
              />
              <Button
                disabled={productData.comments.length <= 3 ? true : false}
                title={`Read all ${productData.comments.length} reviews`}
                titleStyle={styles.titleRead}
                buttonStyle={styles.btnStyleRead}
                containerStyle={styles.btnContainer}
                onPress={() => this.onPressReadAll()}
              />
              <DefaultButton
                disabled={!authStatus}
                title="Write own comment"
                onPressButton={() =>
                  this.props.navigation.navigate('CreateComment')
                }
              />
            </View>
            <View>
              <Text style={styles.similarAds}>SIMILAR ADS</Text>
              <View style={styles.flatListView}>
                <FlatList
                  numColumns={2}
                  data={
                    this.state.moreAds === true
                      ? productData.recommended
                      : productData.recommended.slice(0, 6)
                  }
                  renderItem={({ item }) => (
                    <ElementListAds
                      item={item}
                      onPressProduct={this.showProductDetail}
                    />
                  )}
                  keyExtractor={item => item.pk.toString()}
                />
              </View>
            </View>
            <Button
              disabled={productData.recommended.length <= 6 ? true : false}
              title="Show more ads"
              titleStyle={styles.titleRead}
              buttonStyle={styles.btnStyleShowMore}
              containerStyle={styles.btnContainer}
              onPress={() => this.onPressMoreAds()}
            />
          </View>
          <View style={styles.bottomView}>
            <Icon
              name="phone"
              type="font-awesome"
              color="white"
              containerStyle={styles.iconPhoneContainer}
              onPress={() => {
                productData.phone_number !== null || undefined
                  ? Linking.openURL(`tel:${productData.phone_number}`)
                  : null;
              }}
            />

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
          <ShareModal
            visible={this.state.modalShow}
            bgImage={
              productData.adimage_set.length === 0
                ? null
                : productData.adimage_set.find(el => el.is_primary === true)
            }
            onClose={this.onPressShere}
            title={productData.title}
            description={productData.description}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ProductScreen;
