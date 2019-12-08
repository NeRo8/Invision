import ProductScreen from './ProductScreen';

import { connect } from 'react-redux';

import { getAdsDetail, setLoading } from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    productData: state.ads.adData,
    loading: state.ads.loading,
    authStatus: state.auth.authStatus,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdData: (id, token) => {
      dispatch(getAdsDetail(id, token));
    },
    setLoad: value => {
      dispatch(setLoading(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
