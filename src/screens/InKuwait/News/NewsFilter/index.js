import NewsFilter from './NewsFilter';

import { connect } from 'react-redux';

import {
  getCategories,
  setFilter,
  getNews,
} from '../../../../redux/actions/inKuwait/newsAction';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.news.categories.results,
    newsFilters: state.inKuwait.news.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    },
    setFilters: (name, value) => {
      dispatch(setFilter(name, value));
    },
    getNewsList: filters => {
      dispatch(getNews(filters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFilter);
