import ProfileSettingsPersonalInformaion from './ProfileSettingsPersonalInformaion';

import { connect } from 'react-redux';

import { changeProfile, setError } from '../../../redux/actions/Users';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
    error: state.users.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeProfile: (profile, token) => {
      dispatch(changeProfile(profile, token));
    },
    onClearError: () => {
      dispatch(setError(null));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSettingsPersonalInformaion);
