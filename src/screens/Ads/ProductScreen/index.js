import ProductScreen from './ProductScreen';

import { connect } from 'react-redux';

import { getAdDetail } from '../../../redux/actions/AdDetail';

const mapStateToProps = state => {
  return {
    productData: state.ad.adDetail,
    userid: state.ad.adDetail.user.pk,
    loading: state.ad.loading,
    error: state.ad.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdData: id => {
      dispatch(getAdDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
