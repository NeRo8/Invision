import NewsAnswers from './NewsAnswers';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    comments: state.inKuwait.news.newsDetail.comments,
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAnswers);
