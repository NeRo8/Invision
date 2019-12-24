import ProfileScreen from './ProfileScreen';

import {
  getProfile,
  getProfileAds,
  deleteAds,
} from '../../redux/actions/Users';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    ads: state.users.ads,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
    loading: state.users.loading,
    error: state.users.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: token => {
      dispatch(getProfile(token));
    },
    getAds: token => {
      dispatch(getProfileAds(token));
    },
    deleteAd: (id, token) => {
      dispatch(deleteAds(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
