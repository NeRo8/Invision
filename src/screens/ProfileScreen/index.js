import ProfileScreen from './ProfileScreen';

import { getProfile, deleteAds, updateAvatar } from '../../redux/actions/Users';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    ads: state.users.ads,
    authStatus: state.auth.authStatus,
    loading: state.users.loading,
    error: state.users.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(getProfile());
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
