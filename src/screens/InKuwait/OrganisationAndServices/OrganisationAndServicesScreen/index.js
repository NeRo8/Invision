import { connect } from 'react-redux';

import OrganisationAndServicesScreen from './OrganisationAndServicesScreen';

import {
  getServices,
  setFilter,
} from '../../../../redux/actions/inKuwait/servicesAction';

const mapStateToProps = state => {
  return {
    loading: state.inKuwait.services.loading,
    servicesList: state.inKuwait.services.servicesList.results,
    filters: state.inKuwait.services.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServiceList: filters => {
      dispatch(getServices(filters));
    },
    onSearch: text => {
      dispatch(setFilter('q', text));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationAndServicesScreen);
