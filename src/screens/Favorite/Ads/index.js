import Ads from './Ads';

import { connect } from 'react-redux';

import {
  getFavoriteAds,
  clearFavoriteAd,
} from '../../../redux/actions/Favorite';

const mapStateToProps = state => {
  return {
    adsList: state.favorite.favoriteAds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorAds: () => dispatch(getFavoriteAds()),
    deleteAd: id => dispatch(clearFavoriteAd(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ads);
