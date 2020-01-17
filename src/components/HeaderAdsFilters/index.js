import HeaderAdsFilters from './HeaderAdsFilters';

import { connect } from 'react-redux';

import { adsActions } from '../../redux/Ads';

const mapStateToProps = state => {
  return {
    city: state.ads.filters.city,
    query: state.ads.filters.q,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: () => {
      dispatch(adsActions.getAds());
    },
    setFilters: (name, value) => {
      dispatch(adsActions.setFilter(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdsFilters);
