import NewsScreen from './NewsScreen';

import { connect } from 'react-redux';

import { newsActions } from '../../../../redux/News';

const mapStateToProps = state => {
  return {
    newsList: state.inKuwait.news.newsList.results,
    newsFilters: state.inKuwait.news.filters,
    loading: state.inKuwait.news.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsList: filters => {
      dispatch(newsActions.getNews(filters));
    },
    setFilters: value => {
      dispatch(newsActions.setFilter('q', value));
    },
    setLoad: () => {
      dispatch(newsActions.setLoading(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
