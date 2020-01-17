import FaqScreen from './FaqScreen';

import { connect } from 'react-redux';

import { faqActions } from '../../../../redux/Faq';

const mapStateToProps = state => {
  return {
    loading: state.inKuwait.faq.loading,
    data: state.inKuwait.faq.faqList.results,
    filtersFaq: state.inKuwait.faq.filters,
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFaqsList: filters => {
      dispatch(faqActions.getFaqs(filters));
    },
    onSearch: value => {
      dispatch(faqActions.setFilter('q', value));
    },
    setFilters: value => {
      dispatch(faqActions.setFilter('status', value));
    },
    setLoad: () => {
      dispatch(faqActions.setLoading(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqScreen);
