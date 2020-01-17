import FaqDetail from './FaqDetail';

import { connect } from 'react-redux';

import { faqActions } from '../../../../redux/Faq';

const mapStateToProps = state => {
  return {
    questionDetail: state.inKuwait.faq.faqDetail,
    authStatus: state.auth.authStatus,
    loading: state.inKuwait.faq.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestionDetail: id => {
      dispatch(faqActions.getFaqDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqDetail);
