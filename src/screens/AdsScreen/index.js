import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { getAds, getAdsLoadMore } from '../../redux/actions/Ads';
import { refreshToken } from '../../redux/actions/Auth';

const mapStateToProps = state => {
  return {
    adsConfig: state.ads.adsList,
    adsList: state.ads.adsList.results,
    loading: state.ads.loading,
    error: state.ads.error,
    filters: state.ads.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: filters => {
      dispatch(getAds(filters));
    },
    getNextAds: url => {
      dispatch(getAdsLoadMore(url));
    },
    refreshAuth: () => {
      dispatch(refreshToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
