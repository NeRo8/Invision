import FaqAnswers from './FaqAnswers';

import { connect } from 'react-redux';
import { faqActions } from '../../../../redux/Faq';

const mapStateToProps = state => {
  return {
    answers: state.inKuwait.faq.faqDetail.answers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reportAnswer: id => {
      dispatch(faqActions.reportAnswer(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqAnswers);
