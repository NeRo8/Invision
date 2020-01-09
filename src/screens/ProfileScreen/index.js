import ProfileScreen from './ProfileScreen';

import {
  getProfile,
  getProfileAds,
  deleteAds,
  updateAvatar,
} from '../../redux/actions/Users';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    ads: state.users.ads,
    token:
      state.auth.user.access_token !== undefined
        ? state.auth.user.access_token
        : null,
    loading: state.users.loading,
    error: state.users.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: token => {
      dispatch(getProfile(token));
    },
    deleteAd: (id, token) => {
      dispatch(deleteAds(id, token));
    },
    onUpdateAvatar: avatar => {
      dispatch(updateAvatar(avatar));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
