import Step3Screen from './Step3Screen';

import { connect } from 'react-redux';

import { adCreateActions } from '../../../../redux/AdCreate';

const mapStateToProps = state => {
  return {
    images: state.adCreate.ad.images,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImageValue: image => {
      dispatch(adCreateActions.addImage(image));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step3Screen);
