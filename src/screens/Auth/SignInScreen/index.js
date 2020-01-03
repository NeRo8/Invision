import { connect } from 'react-redux';
import { loginWithFacebook } from '../../../redux/actions/authAction';
import SignInScreen from './SignInScreen';

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    user: state.auth.userAuth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    facebookLogin: token => {
      dispatch(loginWithFacebook(token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
