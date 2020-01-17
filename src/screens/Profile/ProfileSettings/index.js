import ProfileSettings from './ProfileSettings';

import { connect } from 'react-redux';

import { usersActions } from '../../../redux/Users';

import { authActions } from '../../../redux/Auth';

const mapStateToProps = state => {
  return {
    notifSettings: state.users.notifSettings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotifSettings: () => {
      dispatch(usersActions.getNotificationSettings());
    },
    setNotifSettings: data => {
      dispatch(usersActions.updateNotificationSettings(data));
    },
    onLogout: () => {
      dispatch(authActions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
