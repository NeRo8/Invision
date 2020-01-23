import PreLoadingScreen from './PreLoadingScreen';

import { connect } from 'react-redux';

import { authActions } from '../../redux/Auth';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refreshToken: () => {
      dispatch(authActions.refreshToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreLoadingScreen);
