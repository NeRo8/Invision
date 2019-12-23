import ProductBuyerProfile from './ProductBuyerProfile';

import { connect } from 'react-redux';

import { setLoading, getAdsDetail } from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    user: state.ads.adData.user,
    ads: state.ads.adData.recommended,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoad: status => {
      dispatch(setLoading(status));
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
