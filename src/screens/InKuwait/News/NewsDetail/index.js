import NewsDetail from './NewsDetail';

import { connect } from 'react-redux';
import { getNewsDetail } from '../../../../redux/actions/inKuwait/newsAction';

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
      dispatch(getNewsDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
