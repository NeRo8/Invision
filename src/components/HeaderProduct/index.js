import HeaderProduct from './HeaderProduct';

import { connect } from 'react-redux';

import { adsActions } from '../../redux/Ads';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAdToFavorite: (id, token) => {
      dispatch(adsActions.addToFavorite(id, token, 'detail'));
    },
    removeAdFromFavorite: (id, token) => {
      dispatch(adsActions.removeFromFavorite(id, token, 'detail'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProduct);
