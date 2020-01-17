import ProfileSettingsPersonalInformaion from './ProfileSettingsPersonalInformaion';

import { connect } from 'react-redux';

import { usersActions } from '../../../redux/Users';

const mapStateToProps = state => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeProfile: profile => {
      dispatch(usersActions.changeProfile(profile));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSettingsPersonalInformaion);
