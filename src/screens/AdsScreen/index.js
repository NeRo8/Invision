import { connect } from 'react-redux';
import AdsScreen from './AdsScreen';

import { getAds } from '../../redux/actions/adsAction';

const mapStateToProps = state => {
  return {
    adsList: state.ads.adsList,
    loading: state.ads.loading,
    error: state.ads.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdsList: () => {
      dispatch(getAds());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsScreen);
