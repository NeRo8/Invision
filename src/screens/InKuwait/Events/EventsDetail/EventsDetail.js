import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Modal,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import moment from 'moment';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

import { DefaultButton } from '../../../../components/Buttons';

import { colors, globalStyles } from '../../../../constants';
import styles from './styles';

const imgWidth = 1600;
const imgHeight = 750;

class EventsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iWidth: 0,
      iHeight: 0,
      modalVisible: false,
    };
  }

  componentDidMount() {
    const { getEvent, navigation } = this.props;

    const id = navigation.getParam('id', null);

    getEvent(id);
  }

  onChangeModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
    setTimeout(() => this.setState({ modalVisible: false }), 2000);
  };

  handlePressAddEvent = event => {
    const eventConfig = {
      title: event.title,
      startDate: moment(event.start_date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      endDate: moment(event.end_date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      location: event.address,
      // and other options
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig);
  };

  render() {
    const { eventsDetail, loading } = this.props;

    if (loading) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={colors.HEADER} />
        </View>
      );
    } else
      return (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <StatusBar />
          <View style={styles.header}>
            <Icon
              containerStyle={{}}
              name="chevron-left"
              type="feather"
              color="white"
              size={32}
              underlayColor="transparent"
              onPress={() => this.props.navigation.goBack()}
            />
            <Text
              style={[
                globalStyles.gothamBold,
                { fontSize: 17, color: 'white' },
              ]}>
              Events
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="ios-heart-empty"
                type="ionicon"
                color="white"
                underlayColor="transparent"
                containerStyle={styles.iconContainer}
              />
              <Icon
                containerStyle={styles.iconContainer}
                name="share-apple"
                type="evilicon"
                color="white"
                underlayColor="transparent"
                size={32}
                onPress={() => this.props.onPressShere()}
              />
            </View>
          </View>
          <View style={{ flex: 8 }}>
            <View style={styles.imageHeader}>
              <Image
                source={{ uri: eventsDetail.image }}
                style={styles.imageContainer}
                resizeMode="stretch"
              />
            </View>

            <View style={styles.wraperView}>
              <Text style={styles.title}>{eventsDetail.title}</Text>

              <View style={styles.viewTab}>
                <View style={styles.viewRow}>
                  <View style={styles.block}>
                    <Icon
                      name="ios-calendar"
                      type="ionicon"
                      color={'#63A3FF'}
                      iconStyle={{ marginRight: 10 }}
                      underlayColor="transparent"
                    />
                    <Text style={styles.blockText}>
                      {moment(eventsDetail.start_date).format('MMM d')}
                    </Text>
                  </View>
                  <View style={styles.block}>
                    <Icon
                      name="clock"
                      type="octicon"
                      color={'#63A3FF'}
                      iconStyle={{ marginRight: 10 }}
                      underlayColor="transparent"
                    />
                    <Text style={styles.blockText}>
                      {moment(eventsDetail.end_date).format('MMM d')}
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
                      underlayColor="transparent"
                    />
                    <Text style={styles.blockText}>{eventsDetail.price}</Text>
                  </View>
                  <View style={styles.block}>
                    <Icon
                      name="map-marker"
                      type="material-community"
                      color={'#63A3FF'}
                      iconStyle={{
                        marginRight: 10,
                      }}
                      underlayColor="transparent"
                    />
                    <Text style={styles.blockText}>
                      {eventsDetail.address.slice(0, 10)} ...
                    </Text>
                  </View>
                </View>
              </View>

              <Text style={styles.description}>{eventsDetail.description}</Text>

              <View style={styles.imageHeader}>
                <Image
                  source={{ uri: eventsDetail.image }}
                  style={styles.imageContainer}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={{ alignItems: 'flex-end' }}>
              <Icon
                raised
                name="ios-pin"
                type="ionicon"
                size={24}
                underlayColor="transparent"
                color={colors.HEADER}
                iconStyle={styles.icon}
                onPress={() => {
                  this.props.navigation.navigate('InKuwaitEventsMap');
                }}
              />
            </View>
            <DefaultButton
              title="Add to Google or iOS Calendar"
              buttonStyle={styles.buttonAddGoogle}
              onPressButton={() => this.handlePressAddEvent(eventsDetail)}
            />

            <DefaultButton
              title="Register to event"
              onPressButton={this.onChangeModalVisible}
            />
          </View>
          <Modal visible={this.state.modalVisible} transparent>
            <View style={styles.modalWindow}>
              <ActivityIndicator size="large" color="white" />
              <Text style={styles.textModal}>
                {"Please, wait\nWill be open the organizer's website"}
              </Text>
            </View>
          </Modal>
        </ScrollView>
      );
  }
}

export default EventsDetail;
