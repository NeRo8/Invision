import SignUpScreen from './SignUpScreen';

import { connect } from 'react-redux';

import { signUp } from '../../../redux/actions/Auth';

const mapDispatchToProps = dispatch => {
  return {
    createAccount: data => {
      dispatch(signUp(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUpScreen);
