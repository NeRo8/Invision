import ProductHeader from './ProductHeader';

import { connect } from 'react-redux';

import { adDetailActions } from '../../../redux/AdDetail';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAdToFavorite: id => {
      dispatch(adDetailActions.addToFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductHeader);
