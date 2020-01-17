import OrganisationAndServicesFilter from './OrganisationAndServicesFilter';

import { connect } from 'react-redux';
import { servicesActions } from '../../../../redux/Services';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.services.categories.results,
    filters: state.inKuwait.services.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServiceList: filters => {
      dispatch(servicesActions.getServices(filters));
    },
    getCategoriesList: () => {
      dispatch(servicesActions.getCategories());
    },
    setCategoryFilter: id => {
      dispatch(servicesActions.setFilter('category', id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationAndServicesFilter);
