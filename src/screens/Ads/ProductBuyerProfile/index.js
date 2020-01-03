import ProductBuyerProfile from './ProductBuyerProfile';

import { connect } from 'react-redux';

import {
  setLoading,
  getAdsDetail,
  getSellerProfile,
} from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    user:
      state.ads.sellerProfile !== null ? state.ads.sellerProfile.user : null,
    ads: state.ads.sellerProfile !== null ? state.ads.sellerProfile.ads : null,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
    loading: state.ads.loading,
    error: state.ads.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoad: status => {
      dispatch(setLoading(status));
    },
    getProfile: userid => {
      dispatch(getSellerProfile(userid));
    },
    getAdData: (id, token) => {
      dispatch(getAdsDetail(id, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductBuyerProfile);
