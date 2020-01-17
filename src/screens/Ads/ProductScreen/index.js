import ProductScreen from './ProductScreen';

import { connect } from 'react-redux';

import { adDetailActions } from '../../../redux/AdDetail';

const mapStateToProps = state => {
  return {
    productData: state.ad.adDetail,
    userid: state.ad.adDetail.user.pk,
    loading: state.ad.loading,
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdData: id => {
      dispatch(adDetailActions.getAdDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
