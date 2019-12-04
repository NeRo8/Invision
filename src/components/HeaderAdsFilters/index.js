import HeaderAdsFilters from './HeaderAdsFilters';
import { connect } from 'react-redux';

import { setFilter } from '../../redux/actions/filtersAction';
import { getAds } from '../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    city: state.filters.filters.city,
    query: state.filters.filters.query,
    filters: state.filters.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (name, value) => {
      dispatch(setFilter(name, value));
    },
    onPressDone: filters => {
      dispatch(getAds(filters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdsFilters);
