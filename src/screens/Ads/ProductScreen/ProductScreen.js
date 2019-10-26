import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Icon, Button, Avatar, Input } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';

import StarRating from 'react-native-star-rating';

import { colors } from '../../../constants/colors';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

import ElementList from '../../../components/ElementList/ElementList';

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
        <Text style={[styles.date, globalStyles.gothamBook]}>{item.date}</Text>
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <Text style={[styles.coment, globalStyles.gothamBook]}>
        {item.coment}
      </Text>
    </View>
  </View>
);

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
      data: [
        { id: 1, title: 1, active: true },
        { id: 2, title: 2, active: false },
        { id: 3, title: 1, active: true },
        { id: 4, title: 2, active: false },
      ],
    };
  }
  render() {
    return (
      <ScrollView>
        <View>
          <FlatList style={{ height: 275, backgroundColor: 'red' }} />
        </View>
        <View style={styles.head}>
          <Text style={[styles.title, globalStyles.gothamBook]}>
            iPhone X 16Gb
          </Text>

          <View style={styles.properties}>
            <Text style={[{ flex: 1 }, styles.price, globalStyles.gothamBook]}>
              10,000 KWD
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
                    { color: colors.UNACTIVE, fontSize: 15, lineHeight: 26 },
                    globalStyles.gothamBook,
                  ]}>
                  100
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
                    { color: colors.UNACTIVE, fontSize: 15, lineHeight: 26 },
                    globalStyles.gothamBook,
                  ]}>
                  01.01.18
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.tagsView}>
            <FlatList
              style={{
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
                borderColor: colors.BORDER,
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
            <Text style={[styles.description, globalStyles.gothamBook]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make.
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
            <View style={{ marginTop: 25, backgroundColor: colors.OTHER }}>
              <TouchableOpacity
                style={{
                  marginHorizontal: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
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
                    source={require('../../../assets/icons/userIcons/man.jpg')}
                    imageProps={{ resizeMode: 'cover' }}
                    size={25}
                  />
                  <Text
                    style={[
                      globalStyles.gothamBold,
                      { marginLeft: 10, lineHeight: 20, fontSize: 15 },
                    ]}>
                    Lucas Unknown
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
              titleStyle={[styles.titleRear, globalStyles.gothamBold]}
              buttonStyle={styles.btnStyleRear}
              containerStyle={styles.btnContainer}
              onPress={null}
            />
            <Button
              title="Write own comment"
              titleStyle={[styles.titleWrite, globalStyles.gothamBold]}
              buttonStyle={styles.btnStyleWrite}
              onPress={null}
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
                data={this.state.data}
                renderItem={({ item }) => (
                  <ElementList
                    item={item}
                    onPressProduct={this.showProductDetail}
                  />
                )}
                keyExtractor={(item, index) => item.id}
              />
            </SafeAreaView>
          </View>
          <Button
            title="Show more ads"
            titleStyle={[styles.titleRear, globalStyles.gothamBold]}
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
      </ScrollView>
    );
  }
}

export default ProductScreen;
