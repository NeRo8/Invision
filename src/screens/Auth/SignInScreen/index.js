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
    handlePressSignIn: data => {
      dispatch(login(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
