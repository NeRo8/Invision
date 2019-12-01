import React, { Component } from 'react';
import { View, Text, Image, FlatList, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon, Input } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

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

const MapFlatList = ({ element }) => (
  <ImageBackground style={styles.elementCotainer} source={element.image}>
    <Icon
      name={element.active ? 'ios-heart' : 'ios-heart-empty'}
      type="ionicon"
      color={element.active ? colors.HEART_ACTIVE : 'silver'}
      underlayColor="transparent"
      containerStyle={styles.elementHeart}
      onPress={element.func}
    />
    <Text style={[globalStyles.gothamMediumRegular, styles.elementTitle]}>
      {element.title}
    </Text>
    <View style={{ flexDirection: 'row' }}>
      <StarRating
        disabled
        maxStars={5}
        rating={element.rating}
        emptyStar="ios-star"
        fullStar="ios-star"
        halfStar="ios-star"
        iconSet="Ionicons"
        fullStarColor={colors.STAR}
        emptyStarColor={colors.UNACTIVE}
        starSize={15}
        starStyle={{ marginRight: 6 }}
      />
      <Text style={[globalStyles.gothamBook, { fontSize: 12, color: 'white' }]}>
        {element.rating.toFixed(1)}
      </Text>
    </View>
  </ImageBackground>
);

class OrganisationAndServicesMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEvents: [
        {
          id: 0,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
          rating: 4,
          coordinate: { latitude: 37.777125, longitude: -122.4324 },
          func: () => this.handlePressHeart(0),
        },
        {
          id: 1,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
          rating: 3.5,
          coordinate: { latitude: 37.78825, longitude: -122.4024 },
          func: () => this.handlePressHeart(1),
        },
        {
          id: 2,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
          rating: 2,
          coordinate: { latitude: 37.78225, longitude: -122.4124 },
          func: () => this.handlePressHeart(2),
        },
        {
          id: 3,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
          rating: 4,
          coordinate: { latitude: 37.78425, longitude: -122.4224 },
          func: () => this.handlePressHeart(3),
        },
        {
          id: 4,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
          rating: 4,
          coordinate: { latitude: 37.78725, longitude: -122.4324 },
          func: () => this.handlePressHeart(4),
        },
        {
          id: 5,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
          rating: 4,
          coordinate: { latitude: 37.78625, longitude: -122.4524 },
          func: () => this.handlePressHeart(5),
        },
      ],
    };
  }

  handlePressHeart = id => {
    const { dataEvents } = this.state;

    const newDataList = dataEvents.map(item =>
      item.id === id ? { ...item, active: !item.active } : { ...item },
    );

    this.setState({
      dataEvents: newDataList,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ flex: 1 }}>
          {this.state.dataEvents.map(item => (
            <Marker coordinate={item.coordinate}>
              <CustomMarker title={item.id} />
            </Marker>
          ))}
        </MapView>
        <Input
          placeholder="Select location..."
          leftIcon={{
            name: 'ios-search',
            type: 'ionicon',
            color: colors.LABEL_GREY_COLOR,
          }}
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[globalStyles.gothamBook, styles.inputSearch]}
          inputContainerStyle={styles.inputContainerStyle}
          containerStyle={styles.containerInput}
        />
        <Icon
          raised
          name="crosshairs-gps"
          type="material-community"
          color={colors.LABEL_GREY_COLOR}
          containerStyle={{ position: 'absolute', bottom: 170, right: 15 }}
        />
        <View style={styles.containerMapFL}>
          <FlatList
            horizontal
            data={this.state.dataEvents}
            renderItem={({ item }) => <MapFlatList element={item} />}
          />
        </View>
      </View>
    );
  }
}

export default OrganisationAndServicesMap;
