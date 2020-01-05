import Step1Screen from './Step1Screen';

import { connect } from 'react-redux';

import { setReducerValue } from '../../../../redux/actions/AdCreate';

const mapStateToProps = state => {
  return {
    category: state.adCreate.category,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => {
      dispatch(setReducerValue(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1Screen);
