import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon, Input } from 'react-native-elements';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';

import { colors, globalStyles } from '../../../../constants';

import styles from './styles';

const CustomMarker = ({ title }) => (
  <View style={styles.markerContainer}>
    <Image
      source={require('../../../../assets/icons/pin.png')}
      style={styles.markerIcon}
    />
    <Text style={[globalStyles.gothamBold, styles.markerTitle]}>{title}</Text>
  </View>
);

const MapFlatList = ({ element, onPressElement }) => (
  <TouchableOpacity
    onPress={() =>
      onPressElement({
        latitude: element.latitude,
        longitude: element.longitude,
      })
    }>
    <ImageBackground
      style={styles.elementCotainer}
      source={{ uri: element.image }}>
      <Icon
        name={element.active ? 'ios-heart' : 'ios-heart-empty'}
        type="ionicon"
        color={element.active ? colors.HEART_ACTIVE : 'silver'}
        underlayColor="transparent"
        containerStyle={styles.elementHeart}
        onPress={element.func}
      />
      <Text style={[globalStyles.gothamBook, styles.elementUnderTitle]}>
        {moment(element.start_date).format('MMM d')} {' - '}
        {moment(element.end_date).format('MMM d')}
      </Text>
      <Text style={[globalStyles.gothamMediumRegular, styles.elementTitle]}>
        {element.title}
      </Text>
    </ImageBackground>
  </TouchableOpacity>
);

class EventsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 30.5366,
        longitude: 47.7429,
        latitudeDelta: 0.1222,
        longitudeDelta: 0.1221,
      },
      currentLocation: null,
    };
  }

  handlePressElement = newRegion => {
    this.setState(prevState => ({
      region: {
        ...prevState.region,
        latitude: parseFloat(newRegion.latitude),
        longitude: parseFloat(newRegion.longitude),
      },
    }));
  };

  handlePressCurrentLocation = newCurrentLocation => {
    this.setState({
      currentLocation: {
        latitude: newCurrentLocation.latitude,
        longitude: newCurrentLocation.longitude,
      },
      region: {
        ...this.state.region,
        latitude: newCurrentLocation.latitude,
        longitude: newCurrentLocation.longitude,
      },
    });
  };

  render() {
    const { eventsList } = this.props;
    const { region, currentLocation } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={region}
          minZoomLevel={5}
          maxZoomLevel={15}
          style={{ flex: 1 }}>
          {currentLocation !== null ? (
            <Marker coordinate={currentLocation} />
          ) : null}
          {eventsList.map(item => (
            <Marker
              coordinate={{
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude),
              }}>
              <CustomMarker title={item.pk} />
            </Marker>
          ))}
        </MapView>

        <Input
          placeholder="Select location..."
          leftIcon={{
            name: 'ios-search',
            type: 'ionicon',
            color: colors.LABEL_GREY_COLOR,
            containerStyle: { marginHorizontal: 5 },
          }}
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[globalStyles.gothamBook, styles.inputSearch]}
          inputContainerStyle={styles.inputContainerStyle}
          containerStyle={styles.containerInput}
        />
        <View style={{ position: 'absolute', bottom: 200, right: 15 }}>
          <Icon
            raised
            name="crosshairs-gps"
            type="material-community"
            color={colors.LABEL_GREY_COLOR}
            onPress={() => {
              Geolocation.getCurrentPosition(location =>
                this.handlePressCurrentLocation(location.coords),
              );
            }}
          />
        </View>

        <View style={styles.containerMapFL}>
          <FlatList
            horizontal
            data={eventsList}
            renderItem={({ item }) => (
              <MapFlatList
                element={item}
                onPressElement={this.handlePressElement}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

export default EventsMap;
