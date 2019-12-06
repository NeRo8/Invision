import FaqScreen from './FaqScreen';

import { connect } from 'react-redux';

import {
  getFaqs,
  setFilter,
} from '../../../../redux/actions/inKuwait/faqAction';

const mapStateToProps = state => {
  return {
    data: state.inKuwait.faq.faqList.results,
    filtersFaq: state.inKuwait.faq.filters,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqScreen);
