import ProductScreen from './ProductScreen';

import { connect } from 'react-redux';

import { getAdsDetail, setLoading } from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    productData: state.ads.adData,
    loading: state.ads.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdData: (token, id) => {
      dispatch(getAdsDetail((token = null), id));
    },
    setLoad: value => {
      dispatch(setLoading(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
