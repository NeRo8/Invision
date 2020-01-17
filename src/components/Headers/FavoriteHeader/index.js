import FavoriteHeader from './FavoriteHeader';

import { connect } from 'react-redux';

import { favoriteActions } from '../../../redux/Favorite';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearAllFavor: () => dispatch(favoriteActions.clearAllFavorites()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHeader);
