import Step2Screen from './Step2Screen';

import { connect } from 'react-redux';

import { adCreateActions } from '../../../../redux/AdCreate';

const mapStateToProps = state => {
  return {
    title: state.adCreate.ad.title,
    description: state.adCreate.ad.description,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => {
      dispatch(adCreateActions.setReducerValue(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step2Screen);
