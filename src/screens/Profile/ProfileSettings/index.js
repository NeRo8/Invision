import ProfileSettings from './ProfileSettings';

import { connect } from 'react-redux';

import {
  getNotificationSettings,
  updateNotificationSettings,
} from '../../../redux/actions/Users';

import { logout } from '../../../redux/actions/Auth';

const mapStateToProps = state => {
  return {
    notifSettings: state.users.notifSettings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotifSettings: () => {
      dispatch(getNotificationSettings());
    },
    setNotifSettings: data => {
      dispatch(updateNotificationSettings(data));
    },
    onLogout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
