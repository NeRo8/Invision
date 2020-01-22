import ProductSellerProfile from './ProductSellerProfile';

import { connect } from 'react-redux';

import { adSellerActions } from '../../../redux/AdSeller';
import { adDetailActions } from '../../../redux/AdDetail';

const mapStateToProps = state => {
  return {
    profile: state.adSeller.profile,
    ads: state.adSeller.ads,
    loading: state.adSeller.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: id => {
      dispatch(adSellerActions.getSellerProfile(id));
    },
    getAdDetail: id => {
      dispatch(adDetailActions.getAdDetail(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductSellerProfile);
