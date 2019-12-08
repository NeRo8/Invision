import FavoriteScreen from './FavoriteScreen';

import { connect } from 'react-redux';

import { getAdsFavorites } from '../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    adsFavoritesList: state.ads.adsFavoritesList.results,
    authStatus: state.auth.authStatus,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavoriteAds: token => {
      dispatch(getAdsFavorites(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);
