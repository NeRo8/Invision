import ForgotPasswordScreen from './ForgotPasswordScreen';

import { authActions } from '../../../redux/Auth';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: email => {
      dispatch(authActions.restorePassword(email));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen);
