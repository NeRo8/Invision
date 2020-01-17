import HeaderAdsFilters from './HeaderAdsFilters';

import { connect } from 'react-redux';

import { adsActions } from '../../redux/Ads';

const mapStateToProps = state => {
  return {
    city: state.ads.filters.city,
    query: state.ads.filters.q,
    filters: state.ads.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: filters => {
      dispatch(adsActions.getAds(filters));
    },
    setFilters: (name, value) => {
      dispatch(adsActions.setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdsFilters);
