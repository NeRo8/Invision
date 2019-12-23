import ProfileScreen from './ProfileScreen';

import { getProfile } from '../../redux/actions/Users';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: token => {
      dispatch(getProfile(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
