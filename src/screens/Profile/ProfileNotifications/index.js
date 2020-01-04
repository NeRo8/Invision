import ProfileNotifications from './ProfileNotifications';

import { connect } from 'react-redux';

import {
  fetchAllThreads,
  setLoading,
  loadOldThreads,
} from '../../../redux/actions/Chat';

const mapStateToProps = state => {
  return {
    threads: state.chat.threads !== null ? state.chat.threads.results : [],
    threadsConf: state.chat.threads,
    loading: state.chat.loading,
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
    setOldThreads: url => {
      dispatch(loadOldThreads(url));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotifications);
