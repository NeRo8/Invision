import NewsFilter from './NewsFilter';

import { connect } from 'react-redux';

import { newsActions } from '../../../../redux/News';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.news.categories.results,
    newsFilters: state.inKuwait.news.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(newsActions.getCategories());
    },
    setFilters: (name, value) => {
      dispatch(newsActions.setFilter(name, value));
    },
    getNewsList: filters => {
      dispatch(newsActions.getNews(filters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFilter);
