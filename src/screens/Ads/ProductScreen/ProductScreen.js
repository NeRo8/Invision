import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {
  Input,
  Icon,
  Button,
  Avatar,
  Rating,
  AirbnbRating,
} from 'react-native-elements';
import {} from 'react-native-ratings';

import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

const ElementFlatList = ({ item }) => (
  <View style={styles.elementContainer}>
    <View>
      <Avatar
        rounded
        source={item.userIcon}
        imageProps={{ resizeMode: 'cover' }}
      />
    </View>
    <View>
      <Text style={[styles.userName, globalStyles.gothamBold]}>
        {item.userName}
      </Text>

      <AirbnbRating imageSize={15} readonly startingValue={item.raiting} />
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
          coment: 'Lorem Ipsum is simply dummy text of the printing.',
        },
        {
          id: 1,
          userName: 'Billy Weaver',
          date: '01.01.19',
          raiting: 4,
          userIcon: require('../../../assets/icons/userIcons/man2.jpg'),
          coment: 'Lorem Ipsum is simply dummy text of the printing.',
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
    };
  }
  render() {
    return (
      <ScrollView>
        <View>
          <FlatList style={{ height: 275, backgroundColor: 'red' }}></FlatList>
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
                    { color: colors.UNACTIVE, fontSize: 15 },
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
                    { color: colors.UNACTIVE, fontSize: 15 },
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
                  <Image source={require('../../../assets/icons/pets.png')} />
                  <Text style={[globalStyles.gothamBold, { marginLeft: 10 }]}>
                    Lucas Unknown
                  </Text>
                </View>
                <View>
                  <Text
                    style={[globalStyles.gothamBook, { color: colors.HEADER }]}>
                    Other ads
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: 'grey',
                height: 200,
                marginTop: 10,
              }}></View>
          </View>
          <View>
            <Text style={[globalStyles.gothamBold, { marginTop: 25 }]}>
              REVIEWS
            </Text>
            <FlatList
              data={this.state.coments}
              renderItem={({ item }) => <ElementFlatList item={item} />}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProductScreen;
