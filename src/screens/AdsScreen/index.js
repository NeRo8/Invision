import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { getAds, getNextAds } from '../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    adsConfig: state.ads.adsList,
    adsList: state.ads.adsList.results,
    loading: state.ads.loading,
    error: state.ads.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: () => {
      dispatch(getAds());
    },
    onRefreshAds: url => {
      dispatch(getNextAds(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
