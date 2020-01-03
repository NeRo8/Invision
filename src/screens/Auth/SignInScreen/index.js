import SignInScreen from './SignInScreen';

import { connect } from 'react-redux';

import { login } from '../../../redux/actions/Auth';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePressSignIn: (email, password) => {
      dispatch(login(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
