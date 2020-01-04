import ProfileNotificationsChat from './ProfileNotificationsChat';

import { connect } from 'react-redux';

import {
  fetchAllMessages,
  loadMore,
  updataMessage,
  setMessage,
} from '../../../redux/actions/Chat';

const mapStateToProps = state => {
  return {
    loading: state.chat.loading,
    user: state.users.user.pk,
    messagesConf: state.chat.messages,
    messages: state.chat.messages !== null ? state.chat.messages.results : [],
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMessages: threadId => {
      dispatch(fetchAllMessages(threadId));
    },
    updateMessageList: threadId => {
      dispatch(updataMessage(threadId));
    },
    setNewMessage: newMessage => {
      dispatch(setMessage(newMessage));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotificationsChat);
