import HeaderAds from './HeaderAds';

import { connect } from 'react-redux';

import { adsActions } from '../../redux/Ads';

const mapStateToProps = state => {
  return {
    filters: state.ads.filters,
    authStatus: state.auth.authStatus,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: (filters, token) => {
      dispatch(adsActions.getAds(filters, token));
    },
    setFilters: value => {
      dispatch(adsActions.setFilter('q', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAds);
