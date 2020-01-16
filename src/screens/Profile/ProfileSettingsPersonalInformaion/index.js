import ProfileSettingsPersonalInformaion from './ProfileSettingsPersonalInformaion';

import { connect } from 'react-redux';

import { changeProfile } from '../../../redux/actions/Users';

const mapStateToProps = state => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeProfile: profile => {
      dispatch(changeProfile(profile));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSettingsPersonalInformaion);
