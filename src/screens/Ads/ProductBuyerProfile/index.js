import ProductBuyerProfile from './ProductBuyerProfile';

import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';
import { adDetailActions } from '../../../redux/AdDetail';

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
      dispatch(adsActions.setLoading(status));
    },
    getProfile: userid => {
      dispatch(adsActions.getSellerProfile(userid));
    },
    getAdData: (id, token) => {
      dispatch(adDetailActions.getAdDetail(id, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductBuyerProfile);
