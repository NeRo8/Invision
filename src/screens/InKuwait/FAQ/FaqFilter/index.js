import FaqFilter from './FaqFilter';

import { connect } from 'react-redux';

import { faqActions } from '../../../../redux/Faq';

const mapStateToProps = state => {
  return {
    categories: state.inKuwait.faq.categories.results,
    filters: state.inKuwait.faq.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqsList: filters => {
      dispatch(faqActions.getFaqs(filters));
    },
    getCategoriesList: () => {
      dispatch(faqActions.getCategories());
    },
    setFilters: (name, id) => {
      dispatch(faqActions.setFilter(name, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqFilter);
