import Step3Screen from './Step3Screen';

import { connect } from 'react-redux';

import { addImage } from '../../../../redux/actions/AdCreate';

const mapStateToProps = state => {
  return {
    image: state.adCreate.ad.image,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImageValue: image => {
      dispatch(addImage(image));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step3Screen);
