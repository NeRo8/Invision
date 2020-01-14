import Step5Screen from './Step5Screen';
import { connect } from 'react-redux';
import { createAd } from '../../../../redux/actions/AdCreate';

const mapDispatchToProps = dispatch => {
  return {
    createNewAd: () => {
      dispatch(createAd());
    },
  };
};

export default connect(null, mapDispatchToProps)(Step5Screen);
