import HeaderAds from './HeaderAds';

import { connect } from 'react-redux';

import { getAds, setFilter } from '../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    filters: state.ads.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: filters => {
      dispatch(getAds(filters));
    },
    setFilters: value => {
      dispatch(setFilter('q', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAds);
