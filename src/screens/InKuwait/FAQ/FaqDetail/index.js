import FaqDetail from './FaqDetail';

import { connect } from 'react-redux';

import { getFaqDetail } from '../../../../redux/actions/inKuwait/faqAction';

const mapStateToProps = state => {
  return {
    questionDetail: state.inKuwait.faq.faqDetail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestionDetail: id => {
      dispatch(getFaqDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqDetail);
