import Step1Screen from './Step1Screen';

import { connect } from 'react-redux';

import { setReducerValue } from '../../../../redux/actions/AdCreate';

const mapStateToProps = state => {
  return {
    category: state.adCreate.ad.category,
    price: state.adCreate.ad.price,
    isSellerPrivate: state.adCreate.ad.is_seller_private,
    stateProduct: state.adCreate.ad.state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => {
      dispatch(setReducerValue(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1Screen);
