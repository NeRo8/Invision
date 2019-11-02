import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';
import globalStyles from '../../../../constants/globalStyles';
import { colors } from '../../../../constants/colors';

const imgWidth = 1600;
const imgHeight = 750;

class EventsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iWidth: 0,
      iHeight: 0,
    };
  }

  onPressArticleComents = () => {
    this.props.navigation.navigate('ArticleComents');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Icon
            containerStyle={{}}
            name="chevron-left"
            type="feather"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={[globalStyles.gothamBold, { fontSize: 17, color: 'white' }]}>
            Events
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="ios-heart-empty"
              type="ionicon"
              color="white"
              containerStyle={styles.iconContainer}
            />
            <Icon
              containerStyle={styles.iconContainer}
              name="share-apple"
              type="evilicon"
              color="white"
              size={32}
              onPress={() => this.props.onPressShere()}
            />
          </View>
        </View>

        <View style={styles.imageHeader}>
          <Image
            source={require('../../../../assets/images/Event.jpg')}
            style={styles.imageContainer}
            resizeMode="contain"
          />
        </View>

        <View style={{ flex: 1, paddingBottom: 150 }}>
          <View style={styles.wraperView}>
            <Text style={[globalStyles.gothamMediumRegular, styles.title]}>
              Is there a cheaper Private english school in Kuwait ?
            </Text>

            <View style={styles.viewTab}>
              <View style={styles.viewRow}>
                <View style={styles.block}>
                  <Icon
                    name="ios-calendar"
                    type="ionicon"
                    color={'#63A3FF'}
                    iconStyle={{ marginRight: 10 }}
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    Oct 11-12
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
                    21.09.18
                  </Text>
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.block}>
                  <Icon
                    name="cash"
                    type="material-community"
                    color={'#63A3FF'}
                    iconStyle={{ marginRight: 10 }}
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    3 KD Enrty
                  </Text>
                </View>
                <View style={styles.block}>
                  <Icon
                    name="map-marker"
                    type="material-community"
                    color={'#63A3FF'}
                    iconStyle={{
                      marginRight: 10,
                    }}
                  />
                  <Text style={[globalStyles.gothamBook, styles.blockText]}>
                    599 Ricky Ke..
                  </Text>
                </View>
              </View>
            </View>

            <Text style={[globalStyles.gothamBook, styles.description]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with.
            </Text>

            <View style={styles.imageHeader}>
              <Image
                source={require('../../../../assets/images/Event.jpg')}
                style={styles.imageContainer}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.btnLContainer}>
            <Icon
              raised
              name="ios-pin"
              type="ionicon"
              color={colors.HEADER}
              iconStyle={styles.icon}
              onPress={() => {
                this.props.navigation.navigate('InKuwaitEventsMap');
              }}
            />
          </View>
          <Button
            titleStyle={[
              globalStyles.gothamBold,
              { color: 'white', fontSize: 15, lineHeight: 24 },
            ]}
            buttonStyle={styles.buttonAddGoogle}
            containerStyle={{ width: '100%' }}
            title="Add to Google or iOS Calendar"
          />
          <Button
            titleStyle={[
              globalStyles.gothamBold,
              { color: 'white', fontSize: 15, lineHeight: 24 },
            ]}
            buttonStyle={styles.buttonRegister}
            containerStyle={{ width: '100%' }}
            title="Register to event"
          />
        </View>
      </ScrollView>
    );
  }
}

export default EventsDetail;
