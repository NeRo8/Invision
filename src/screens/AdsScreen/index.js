import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { getAds, getNextAds } from '../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    adsConfig: state.ads.adsList,
    adsList: state.ads.adsList.results,
    loading: state.ads.loading,
    error: state.ads.error,
    filters: state.filters.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: filters => {
      dispatch(getAds(filters));
    },
    onRefreshAds: url => {
      dispatch(getNextAds(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
