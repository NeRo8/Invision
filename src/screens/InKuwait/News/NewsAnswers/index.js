import NewsAnswers from './NewsAnswers';

import { connect } from 'react-redux';
import { newsActions } from '../../../../redux/News';

const mapStateToProps = state => {
  return {
    comments: state.inKuwait.news.newsDetail.comments,
    authStatus: state.auth.authStatus,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAnswerReport: (commentId, token) => {
      dispatch(newsActions.setReport(commentId, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAnswers);
