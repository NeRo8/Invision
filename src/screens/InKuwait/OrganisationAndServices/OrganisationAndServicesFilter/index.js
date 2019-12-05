import OrganisationAndServicesFilter from './OrganisationAndServicesFilter';

import { connect } from 'react-redux';
import {
  getCategories,
  setFilter,
  getServices,
} from '../../../../redux/actions/inKuwait/servicesAction';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.services.categories.results,
    filters: state.inKuwait.services.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServiceList: filters => {
      dispatch(getServices(filters));
    },
    getCategoriesList: () => {
      dispatch(getCategories());
    },
    setCategoryFilter: id => {
      dispatch(setFilter('category', id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationAndServicesFilter);
