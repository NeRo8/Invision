import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { getAds, getAdsLoadMore, setLoading } from '../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    adsConfig: state.ads.adsList,
    adsList: state.ads.adsList.results,
    loading: state.ads.loading,
    error: state.ads.error,
    filters: state.ads.filters,
    authStatus: state.auth.authStatus,
    token: state.auth.user.access_token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: (filters, token) => {
      dispatch(getAds(filters, token));
    },
    getNextAds: url => {
      dispatch(getAdsLoadMore(url));
    },
    setLoad: value => {
      dispatch(setLoading(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
