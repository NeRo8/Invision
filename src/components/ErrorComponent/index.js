import ErrorComponent from './ErrorComponent';

import { connect } from 'react-redux';

import { clearErr } from '../../redux/actions/Error';

const mapStateToProps = state => {
  return {
    error: state.error.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearError: () => {
      dispatch(clearErr());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);
