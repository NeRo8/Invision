import Step5Screen from './Step5Screen';

import { connect } from 'react-redux';

import { adCreateActions } from '../../../../redux/AdCreate';

const mapDispatchToProps = dispatch => {
  return {
    createNewAd: () => {
      dispatch(adCreateActions.createAd());
    },
  };
};

export default connect(null, mapDispatchToProps)(Step5Screen);
