import FaqFilter from './FaqFilter';

import { connect } from 'react-redux';

import {
  getCategories,
  setFilter,
  getFaqs,
} from '../../../../redux/actions/inKuwait/faqAction';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.faq.categories.results,
    filters: state.inKuwait.faq.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqsList: filters => {
      dispatch(getFaqs(filters));
    },
    getCategoriesList: () => {
      dispatch(getCategories());
    },
    setFilters: (name, id) => {
      dispatch(setFilter(name, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqFilter);
