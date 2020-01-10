import ElementListAds from './ElementListAds';

import { connect } from 'react-redux';

import { addToFavorite, removeFromFavorite } from '../../../redux/actions/Ads';

const mapStateToProps = state => {
  return {
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: (id, token) => {
      dispatch(addToFavorite(id, token));
    },
    removeFavorite: (id, token) => {
      dispatch(removeFromFavorite(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementListAds);
