import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import {
  getAds,
  getNextAds,
  getPreviousAds,
} from '../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    adsConfig: state.ads.adsList,
    adsList: state.ads.adsList.results,
    loading: state.ads.loading,
    error: state.ads.error,
    page: state.ads.page,
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
    onLoadPreviousAds: url => {
      dispatch(getPreviousAds(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
