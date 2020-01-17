import ElementListAds from './ElementListAds';

import { connect } from 'react-redux';

import { adsActions } from '../../../redux/Ads';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: id => {
      dispatch(adsActions.addToFavorite(id));
    },
    removeFavorite: id => {
      dispatch(adsActions.removeFromFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementListAds);
