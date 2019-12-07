import FaqAsk from './FaqAsk';

import { connect } from 'react-redux';
import {
  setQuestion,
  getCategories,
} from '../../../../redux/actions/inKuwait/faqAction';

const mapStatToProps = state => {
  return {
    token: state.auth.user.access_token,
    userProfile: state.auth.user.user,
    categories: state.inKuwait.faq.categories.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryList: () => {
      dispatch(getCategories());
    },
    addQuestion: (token, question) => {
      dispatch(setQuestion(token, question));
    },
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(FaqAsk);
