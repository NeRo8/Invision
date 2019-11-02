import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';

import NewsList from '../../../../components/OrganisationAndServicesList/OrganisationAndServicesList';

import styles from './styles';
import { colors } from '../../../../constants/colors';

import { Icon } from 'react-native-elements';

class OrganisationAndServicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Central skyscrapers',
          rating: '4.0',
          image: require('../../../../assets/images/building.jpg'),
        },
        {
          id: 2,
          title: 'Central skyscrapers',
          rating: '5.0',
          image: require('../../../../assets/images/building.jpg'),
        },
        {
          id: 3,
          title: 'Central skyscrapers',
          rating: '4.0',
          image: require('../../../../assets/images/building.jpg'),
        },
        {
          id: 4,
          title: 'Central skyscrapers',
          rating: '5.0',
          image: require('../../../../assets/images/building.jpg'),
        },
        {
          id: 5,
          title: 'Central skyscrapers',
          rating: '4.0',
          image: require('../../../../assets/images/building.jpg'),
        },
        {
          id: 6,
          title: 'Central skyscrapers',
          rating: '5.0',
          image: require('../../../../assets/images/building.jpg'),
        },
      ],
    };
  }

  onPressOrganizationOrService = () => {
    this.props.navigation.navigate('OrganisationServiceDetail');
  };

  OnPressChoodeLocation = () => {
    this.props.navigation.navigate('ChooseLocationServices');
  };

  render() {
    return (
      <View style={styles.wraper}>
        <StatusBar backgroundColor={'transparent'} />
        <SafeAreaView style={styles.flatListView}>
          <FlatList
            numColumns={2}
            data={this.state.data}
            renderItem={({ item }) => (
              <NewsList
                item={item}
                onPressOrganizationOrService={this.onPressOrganizationOrService}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
          <Icon
            name="map-pin"
            type="feather"
            containerStyle={styles.mapPin}
            color={colors.HEADER}
            onPress={this.OnPressChoodeLocation}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default OrganisationAndServicesScreen;
