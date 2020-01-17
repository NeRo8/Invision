import Ads from './Ads';

import { connect } from 'react-redux';

import { favoriteActions } from '../../../redux/Favorite';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
    adsList: state.favorite.favoriteAds,
    loading: state.favorite.favoriteAdsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorAds: () => dispatch(favoriteActions.getFavoriteAds()),
    deleteAd: id => dispatch(favoriteActions.clearFavoriteAd(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ads);
