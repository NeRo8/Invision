import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';
import { colors, globalStyles } from '../../../../constants';

const imgWidth = 1600;
const imgHeight = 750;

class NewsArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iWidth: 0,
      iHeight: 0,
      imgURL:
        'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/united-states/newyork/newyork_NationalGeographic_2328428.adapt.1900.1.jpg',
    };
  }

  componentDidMount() {
    Image.getSize(this.state.imgURL, (width, height) => {
      this.setState({
        iWidth: width,
        iHeight: height,
      });
    });
  }

  onPressArticleComents = () => {
    this.props.navigation.navigate('ArticleComents');
  };

  onPressWriteComment = () => {
    this.props.navigation.navigate('NewsWriteComment');
  };

  render() {
    const remoteImage =
      this.state.iHeight / (this.state.iWidth / Dimensions.get('window').width);

    return (
      <View>
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
              source={require('../../../../assets/images/Event.jpg')}
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
                <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
                  Is there a cheaper Private english school in Kuwait ?
                </Text>
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
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    100
                  </Text>
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
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    Education
                  </Text>
                </View>
              </View>
              <View style={styles.descriptionView}>
                <Text style={[globalStyles.gotham, styles.description]}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with.
                </Text>
              </View>

              <View
                style={{
                  marginTop: 30,
                  width: '100%',
                  height:
                    imgHeight / (imgWidth / Dimensions.get('window').width),
                }}>
                <Image
                  source={require('../../../../assets/images/Event.jpg')}
                  style={styles.imageContainer}
                  resizeMode="contain"
                />
              </View>
              <TouchableOpacity onPress={this.onPressArticleComents}>
                <View
                  style={[
                    styles.block,
                    { justifyContent: 'space-between', marginTop: 20 },
                  ]}>
                  <Text
                    style={[globalStyles.gothamBook, styles.blockBottomText]}>
                    Answers
                  </Text>
                  <Text
                    style={[
                      globalStyles.gothamBook,
                      styles.blockBottomText,
                      { color: 'black' },
                    ]}>
                    3
                  </Text>
                </View>
              </TouchableOpacity>
              <Button
                titleStyle={[
                  globalStyles.gothamBold,
                  { color: 'white', fontSize: 15, lineHeight: 24 },
                ]}
                buttonStyle={styles.buttonSend}
                title="Write comment"
                onPress={this.onPressWriteComment}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NewsArticleScreen;
