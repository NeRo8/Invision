import React, { Component } from 'react';
import { View, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

import HeaderInKuwaitCategory from '../../../../components/Headers/HeaderInKuwaitCategory';
import { ElementListOrganisation } from '../../../../components/ElementLists';

import styles from './styles';
import { colors } from '../../../../constants';

class OrganisationAndServicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getServiceList } = this.props;

    getServiceList();
  }

  onPressOrganizationOrService = () => {
    this.props.navigation.navigate('OrganisationAndServicesDetail');
  };

  onPressChoodeLocation = () => {
    this.props.navigation.navigate('OrganisationAndServicesMap');
  };

  render() {
    const {
      navigation,
      servicesList,
      onSearch,
      getServiceList,
      filters,
      loading,
    } = this.props;

    if (loading) {
      return (
        <View
          style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    } else
      return (
        <View style={{ flex: 1 }}>
          <HeaderInKuwaitCategory
            title="Organisation & Services"
            leftIcon={true}
            onPressLeftIcon={() => navigation.navigate('InKuwait')}
            rightIcon={
              <Icon
                name="filter"
                type="material-community"
                color="white"
                underlayColor="transparent"
                onPress={() =>
                  navigation.navigate('OrganisationAndServicesFilter')
                }
              />
            }
            onSearchQuery={onSearch}
            onSubmitQuery={() => getServiceList(filters)}
          />
          <View style={styles.wraper}>
            <StatusBar backgroundColor={'transparent'} />
            <FlatList
              numColumns={2}
              data={servicesList}
              renderItem={({ item }) => (
                <ElementListOrganisation
                  element={item}
                  onPressOrganizationOrService={
                    this.onPressOrganizationOrService
                  }
                />
              )}
              keyExtractor={item => item.pk.toString()}
              contentContainerStyle={{ flex: 1 }}
            />
            <Icon
              raised
              name="map-pin"
              type="feather"
              underlayColor="transparent"
              containerStyle={styles.mapPin}
              color={colors.HEADER}
              onPress={this.onPressChoodeLocation}
            />
          </View>
        </View>
      );
  }
}

export default OrganisationAndServicesScreen;
