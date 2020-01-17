import NewsDetail from './NewsDetail';

import { connect } from 'react-redux';
import { newsActions } from '../../../../redux/News';

const mapStateToProps = state => {
  return {
    newsDetail: state.inKuwait.news.newsDetail,
    loading: state.inKuwait.news.loading,
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: id => {
      dispatch(newsActions.getNewsDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
