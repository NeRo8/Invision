import HeaderAds from './HeaderAds';

import { connect } from 'react-redux';

import { getAds, setFilter } from '../../redux/actions/Ads';

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
      dispatch(getAds(filters, token));
    },
    setFilters: value => {
      dispatch(setFilter('q', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAds);
