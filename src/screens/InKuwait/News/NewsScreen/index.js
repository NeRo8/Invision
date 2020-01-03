import NewsScreen from './NewsScreen';

import { connect } from 'react-redux';

import {
  getNews,
  setFilter,
  setLoading,
} from '../../../../redux/actions/inKuwait/newsAction';

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
      dispatch(getNews(filters));
    },
    setFilters: value => {
      dispatch(setFilter('q', value));
    },
    setLoad: () => {
      dispatch(setLoading(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
