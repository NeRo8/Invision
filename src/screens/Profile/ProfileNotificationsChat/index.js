import ProfileNotificationsChat from './ProfileNotificationsChat';

import { connect } from 'react-redux';

import { fetchAllMessages } from '../../../redux/actions/Chat';

const mapStateToProps = state => {
  return {
    loading: state.chat.loading,
    user: state.users.user.pk,
    messages: state.chat.messages,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMessages: threadId => {
      dispatch(fetchAllMessages(threadId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotificationsChat);
