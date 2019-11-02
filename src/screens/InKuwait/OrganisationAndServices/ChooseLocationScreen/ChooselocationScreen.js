import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar, Text } from 'react-native';

import NewsList from '../../../../components/OrganisationAndServicesList/OrganisationAndServicesList';

import styles from './styles';
import globalStyles from '../../../../constants/globalStyles';
import { colors } from '../../../../constants/colors';

import { Icon, Input } from 'react-native-elements';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class ChooselocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View>
        <View style={styles.bodyBlock}>
          <Input
            leftIcon={() => (
              <Icon
                name="ios-search"
                type="ionicon"
                color={colors.UNACTIVE}
                size={24}
              />
            )}
            placeholder="Select location..."
            inputStyle={[
              globalStyles.gothamBook,
              { fontSize: 15, lineHeight: 20, fontWeight: '300' },
            ]}
            placeholderTextColor={colors.UNACTIVE}
            leftIconContainerStyle={styles.leftIconContainer}
            inputContainerStyle={styles.inputContainerS}
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.mapView}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            provider="google"
            style={{ flex: 1 }}>
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </View>
      </View>
    );
  }
}

export default ChooselocationScreen;
