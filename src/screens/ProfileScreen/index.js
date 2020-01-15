import ProfileScreen from './ProfileScreen';

import {
  getProfile,
  deleteAds,
  updateAvatar,
  getProfileAds,
  setAdsStatus,
} from '../../redux/actions/Users';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    ads: state.users.ads,
    authStatus: state.auth.authStatus,
    loading: state.users.loading,
    adsState: state.users.adsStatus,
    error: state.users.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(getProfile());
    },
    getUserAds: () => {
      dispatch(getProfileAds());
    },
    setStatusAds: value => {
      dispatch(setAdsStatus(value));
    },
    deleteAd: id => {
      dispatch(deleteAds(id));
    },
    onUpdateAvatar: avatar => {
      dispatch(updateAvatar(avatar));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
