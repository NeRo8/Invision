import Ads from './Ads';

import { connect } from 'react-redux';

import {
  getFavoriteAds,
  clearFavoriteAd,
} from '../../../redux/actions/Favorite';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
    adsList: state.favorite.favoriteAds,
    loading: state.favorite.favoriteAdsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorAds: () => dispatch(getFavoriteAds()),
    deleteAd: id => dispatch(clearFavoriteAd(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ads);
