import FaqScreen from './FaqScreen';

import { connect } from 'react-redux';

import {
  getFaqs,
  setFilter,
} from '../../../../redux/actions/inKuwait/faqAction';

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
      dispatch(getFaqs(filters));
    },
    onSearch: value => {
      dispatch(setFilter('q', value));
    },
    setFilters: value => {
      dispatch(setFilter('status', value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqScreen);
