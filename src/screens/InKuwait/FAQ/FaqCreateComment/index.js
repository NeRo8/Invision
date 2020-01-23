import FaqCreateComment from './FaqCreateComment';

import { connect } from 'react-redux';

import { faqActions } from '../../../../redux/Faq';

const mapStateToProps = state => {
  return {
    user: state.auth.user.user,
    questionId: state.inKuwait.faq.faqDetail.pk,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendComment: data => {
      dispatch(faqActions.sendComment(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqCreateComment);
