import Ads from './Ads';

import { connect } from 'react-redux';

import { getFavoriteAds } from '../../../redux/actions/Favorite';

const mapStateToProps = state => {
  return {
    adsList: state.favorite.favoriteAds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorAds: () => dispatch(getFavoriteAds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ads);
