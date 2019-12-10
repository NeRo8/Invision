import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import moment from 'moment';
import HTML from 'react-native-render-html';

import { DefaultButton } from '../../../../components/Buttons';

import styles from './styles';
import { colors } from '../../../../constants';

const imgWidth = 1600;
const imgHeight = 750;
class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iWidth: 0,
      iHeight: 0,
    };
  }

  componentDidMount() {
    const { getNews } = this.props;

    const id = this.props.navigation.getParam('id', null);

    getNews(id);
  }

  render() {
    const { loading, newsDetail, authStatus, navigation } = this.props;

    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    } else
      return (
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.container}>
              <Icon
                containerStyle={{}}
                name="chevron-left"
                type="feather"
                color="white"
                size={32}
                onPress={() => this.props.navigation.goBack()}
              />
              <Icon
                containerStyle={styles.icons}
                name="share-apple"
                type="evilicon"
                color="white"
                size={32}
                onPress={() => this.props.onPressShere()}
              />
            </View>
          </View>

          <ScrollView>
            <View
              style={{
                width: '100%',
                height: imgHeight / (imgWidth / Dimensions.get('window').width),
              }}>
              <Image
                source={{ uri: newsDetail.cover }}
                style={styles.imageContainer}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                backgroundColor: colors.BACKGROUND,
              }}>
              <View style={styles.wraperView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{newsDetail.title}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <View style={styles.block}>
                    <Icon
                      name="cellphone-text"
                      type="material-community"
                      color={'#63A3FF'}
                      iconStyle={{ marginRight: 10 }}
                    />
                    <Text style={styles.blockText}></Text>
                  </View>
                  <View style={styles.block}>
                    <Icon
                      name="clock"
                      type="octicon"
                      color={'#63A3FF'}
                      iconStyle={{ marginRight: 10 }}
                    />
                    <Text style={styles.blockText}>
                      {moment(newsDetail.created).format('YYYY-MM-DD')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                  }}>
                  <View style={styles.block}>
                    <Icon
                      name="eye-outline"
                      type="material-community"
                      color={'#63A3FF'}
                      iconStyle={{ marginRight: 10 }}
                    />
                    <Text style={styles.blockText}>{newsDetail.hit_count}</Text>
                  </View>
                  <View style={styles.block}>
                    <Icon
                      name="tag-outline"
                      type="material-community"
                      color={'#63A3FF'}
                      iconStyle={{
                        marginRight: 10,
                        transform: [{ rotate: '90deg' }],
                      }}
                    />
                    <Text style={styles.blockText}>
                      {newsDetail.category.name}
                    </Text>
                  </View>
                </View>
                <View style={styles.descriptionView}>
                  <HTML
                    containerStyle={styles.descriptionView}
                    html={newsDetail.description}
                    baseFontStyle={styles.description}
                    imagesInitialDimensions={{
                      width: '100%',
                      height: 300,
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('NewsAnswers')}>
                  <View
                    style={[
                      styles.block,
                      { justifyContent: 'space-between', marginTop: 20 },
                    ]}>
                    <Text style={styles.blockBottomText}>Answers</Text>
                    <Text style={[styles.blockBottomText, { color: 'black' }]}>
                      {newsDetail.comment_count}
                    </Text>
                  </View>
                </TouchableOpacity>
                <DefaultButton
                  title="Write comment"
                  onPressButton={() => navigation.navigate('NewsCreateComment')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
  }
}

export default NewsDetail;
