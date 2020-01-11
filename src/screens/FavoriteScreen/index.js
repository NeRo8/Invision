import FavoriteScreen from './FavoriteScreen';

import { connect } from 'react-redux';

import { getAdsFavorites, deleteFavorites } from '../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    adsFavoritesList: state.ads.adsFavoritesList.results,
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavoriteAds: () => {
      dispatch(getAdsFavorites());
    },
    deleteAllFavorites: () => {
      dispatch(deleteFavorites());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);
