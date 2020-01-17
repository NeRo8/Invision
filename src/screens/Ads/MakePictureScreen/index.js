import MakePictureScreen from './MakePictureScreen';

import { connect } from 'react-redux';

import { adCreateActions } from '../../../redux/AdCreate';

const mapStateToProps = state => {
  return {
    image: state.adCreate.ad.image,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImageValue: image => {
      dispatch(adCreateActions.addImage(image));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakePictureScreen);
