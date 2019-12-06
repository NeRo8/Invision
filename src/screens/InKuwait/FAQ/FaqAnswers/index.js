import FaqAnswers from './FaqAnswers';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    answers: state.inKuwait.faq.faqDetail.answers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    replyAnswer: () => {},
    reportAnswer: () => {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqAnswers);
