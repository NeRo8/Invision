import ProfileScreen from './ProfileScreen';

import { usersActions } from '../../redux/Users';

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
      dispatch(usersActions.getProfile());
    },
    getUserAds: () => {
      dispatch(usersActions.getProfileAds());
    },
    setStatusAds: value => {
      dispatch(usersActions.setAdsStatus(value));
    },
    deleteAd: id => {
      dispatch(usersActions.deleteAds(id));
    },
    onUpdateAvatar: avatar => {
      dispatch(usersActions.updateAvatar(avatar));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
