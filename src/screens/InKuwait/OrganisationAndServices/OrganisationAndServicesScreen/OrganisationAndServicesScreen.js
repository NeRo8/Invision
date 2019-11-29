import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { getServices } from '../../../../redux/actions/inKuwaitAction';

import { ElementListOrganisation } from '../../../../components/ElementLists';

import styles from './styles';

import { colors } from '../../../../constants';
import HeaderInKuwaitCategory from '../../../../components/Headers/HeaderInKuwaitCategory';
import { Header } from 'react-navigation-stack';

class OrganisationAndServicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getServiceList();

    console.log(this.props.serviceList);
  }

  onPressOrganizationOrService = () => {
    this.props.navigation.navigate('OrganisationServiceDetail');
  };

  onPressChoodeLocation = () => {
    this.props.navigation.navigate('OrganisationServiceMap');
  };

  render() {
    const { navigation } = this.props;

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
        />
        <View style={styles.wraper}>
          <StatusBar backgroundColor={'transparent'} />
          <FlatList
            numColumns={2}
            data={this.props.servicesList}
            renderItem={({ item }) => (
              <ElementListOrganisation
                element={item}
                onPressOrganizationOrService={this.onPressOrganizationOrService}
              />
            )}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ flex: 1 }}
          />
          <Icon
            raised
            name="map-pin"
            type="feather"
            containerStyle={styles.mapPin}
            color={colors.HEADER}
            onPress={this.onPressChoodeLocation}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    servicesList: state.inKuwait.servicesList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServiceList: () => {
      dispatch(getServices());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationAndServicesScreen);
