import { connect } from 'react-redux';

import OrganisationAndServicesScreen from './OrganisationAndServicesScreen';

import { servicesActions } from '../../../../redux/Services';

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
      dispatch(servicesActions.getServices(filters));
    },
    onSearch: text => {
      dispatch(servicesActions.setFilter('q', text));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationAndServicesScreen);
