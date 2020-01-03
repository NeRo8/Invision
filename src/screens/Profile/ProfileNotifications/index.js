import ProfileNotifications from './ProfileNotifications';

import { connect } from 'react-redux';

import { fetchAllThreads, setLoading } from '../../../redux/actions/Chat';

const mapStateToProps = state => {
  return {
    threads: state.chat.threads,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllThreads: () => {
      dispatch(fetchAllThreads());
    },
    updateLoading: () => {
      dispatch(setLoading(true));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotifications);
