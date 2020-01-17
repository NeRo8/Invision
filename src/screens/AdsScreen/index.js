import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { adsActions } from '../../redux/Ads';
import { authActions } from '../../redux/Auth';

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
      dispatch(adsActions.getAds(filters));
    },
    getNextAds: url => {
      dispatch(adsActions.getAdsLoadMore(url));
    },
    refreshAuth: () => {
      dispatch(authActions.refreshToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
