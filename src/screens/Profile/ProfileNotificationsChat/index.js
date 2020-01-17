import ProfileNotificationsChat from './ProfileNotificationsChat';

import { connect } from 'react-redux';

import { chatActions } from '../../../redux/Chat';

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
      dispatch(chatActions.fetchAllMessages(threadId));
    },
    updateMessageList: threadId => {
      dispatch(chatActions.updataMessage(threadId));
    },
    loadMoreMessages: url => {
      dispatch(chatActions.loadOldMessages(url));
    },
    setNewMessage: newMessage => {
      dispatch(chatActions.setMessage(newMessage));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNotificationsChat);
