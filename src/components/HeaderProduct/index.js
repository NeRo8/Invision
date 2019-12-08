import HeaderProduct from './HeaderProduct';

import { connect } from 'react-redux';

import { addToFavorite, removeFromFavorite } from '../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAdToFavorite: (id, token) => {
      dispatch(addToFavorite(id, token));
    },
    removeAdFromFavorite: (id, token) => {
      dispatch(removeFromFavorite(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProduct);
