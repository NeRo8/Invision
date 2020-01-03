import NewsCreateComment from './NewsCreateComment';

import { connect } from 'react-redux';
import { setComment } from '../../../../redux/actions/inKuwait/newsAction';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    news: state.inKuwait.news.newsDetail,
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (data, token) => {
      dispatch(setComment(data, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsCreateComment);
