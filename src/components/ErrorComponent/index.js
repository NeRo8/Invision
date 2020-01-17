import ErrorComponent from './ErrorComponent';

import { connect } from 'react-redux';

import { errorActions } from '../../redux/Error';

const mapStateToProps = state => {
  return {
    error: state.error.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearError: () => {
      dispatch(errorActions.clearErr());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);
