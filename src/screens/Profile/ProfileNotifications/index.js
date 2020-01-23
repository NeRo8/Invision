import ProfileNotifications from './ProfileNotifications';

import { connect } from 'react-redux';

import { chatActions } from '../../../redux/Chat';

const mapStateToProps = state => {
  return {
    threads: state.chat.threads !== null ? state.chat.threads.results : [],
    threadsConf: state.chat.threads,
    loading: state.chat.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllThreads: () => {
      dispatch(chatActions.fetchAllThreads());
    },
    updateLoading: () => {
      dispatch(chatActions.setLoading(true));
    },
    setOldThreads: url => {
      dispatch(chatActions.loadOldThreads(url));
    },
    blockThreads: id => {
      dispatch(chatActions.blockThreads(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotifications);
