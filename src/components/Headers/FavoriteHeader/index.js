import FavoriteHeader from './FavoriteHeader';

import { connect } from 'react-redux';

import { clearAllFavorites } from '../../../redux/actions/Favorite';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearAllFavor: () => dispatch(clearAllFavorites()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHeader);
