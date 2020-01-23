import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { adsActions } from '../../redux/Ads';

const mapStateToProps = state => {
  return {
    adsConfig: state.ads.adsList,
    adsList: state.ads.adsList.results,
    loading: state.ads.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: () => {
      dispatch(adsActions.getAds());
    },
    getNextAds: url => {
      dispatch(adsActions.getAdsLoadMore(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
