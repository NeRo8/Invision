import ProfileSettings from './ProfileSettings';

import { connect } from 'react-redux';

import {
  getNotificationSettings,
  updateNotificationSettings,
} from '../../../redux/actions/Users';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
