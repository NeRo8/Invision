import ProfileNotifications from './ProfileNotifications';

import { connect } from 'react-redux';

import { fetchAllThreads } from '../../../redux/actions/Chat';

const mapStateToProps = state => {
  return {
    threads: state.chat.threads !== null ? state.chat.threads.results : [],
    loading: state.chat.loading,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllThreads: () => {
      dispatch(fetchAllThreads());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotifications);
